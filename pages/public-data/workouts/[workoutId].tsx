import { useRouter } from 'next/router'
import styled from 'styled-components'
import { format } from 'date-fns'
import { UserAvatarContainer } from '../../../components/cardsAndTags/userAvatar'
import { WorkoutTag } from '../../../components/cardsAndTags/workoutTag'
import { TagIcon, TargetIcon } from '../../../components/icons'
import { LoadingDots } from '../../../components/loadingIndicators'
import { showToast } from '../../../components/notifications'
import AdminActionsUI from '../../../components/public-content/workoutDetails/adminActionsUI'
import WorkoutSectionUI from '../../../components/public-content/workoutDetails/workoutSectionUI'
import { BackButton } from '../../../styles/buttons'
import {
  AdminPublicWorkoutCountsDocument,
  AdminPublicWorkoutSummariesDocument,
  PublicContentValidationStatus,
  useAdminPublicWorkoutByIdQuery,
  useUpdateWorkoutMetaDataAdminMutation,
} from '../../../graphql/generated_types'
import {
  UploadcareAudioPlayerWrapper,
  UploadcareImageWrapper,
  UploadcareVideoPlayerWrapper,
} from '../../../services/uploadcareComponents'
import {
  ElevatedBox,
  FlexBox,
  MaxSizedBox,
  Padding,
  Spacer,
} from '../../../styles/layout'
import { MainText, SubTitle, TinyText, Title } from '../../../styles/text'

export default function WorkoutDetails() {
  const router = useRouter()
  const { workoutId } = router.query

  const { loading, error, data } = useAdminPublicWorkoutByIdQuery({
    variables: {
      id: workoutId as string,
    },
  })

  const [update, { loading: updateInProgress, reset }] =
    useUpdateWorkoutMetaDataAdminMutation({
      onCompleted() {
        showToast('Workout Meta Data Updated', 'Success')
        reset()
      },
      onError() {
        showToast('API error updating workout!', 'Error')
        reset()
      },
    })

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingDots />
  } else {
    const workout = data.adminPublicWorkoutById

    return (
      <div>
        <FlexBox direction="row">
          <div>
            <FlexBox direction="row" padding="0 0 16px 0">
              <BackButton />
              <Spacer right="4px" />
              <SubTitle>/</SubTitle>
              <Spacer right="4px" />
              <Title>{workout.name}</Title>
            </FlexBox>

            <FlexBox padding="0 0 12px 0" direction="row" align="center">
              {workout.User.avatarUri && (
                <Padding padding="0 8px 0 0">
                  <UserAvatarContainer
                    uuid={workout.User.avatarUri}
                    size={50}
                  />
                </Padding>
              )}
              <FlexBox padding="0 8px 0 0">
                <SubTitle>{workout.User.displayName}</SubTitle>
                <TinyText>
                  Created on {format(new Date(workout.createdAt), 'PPP')}
                </TinyText>
              </FlexBox>
            </FlexBox>

            {workout.description && (
              <Padding padding="0 0 8px 0">
                <MaxSizedBox maxWidth={800}>
                  <MainText>{workout.description}</MainText>
                </MaxSizedBox>
              </Padding>
            )}

            {workout.WorkoutTags.length > 0 && (
              <Padding padding="0 0 6px 0">
                <FlexBox wrap="wrap" direction="row">
                  {workout.WorkoutTags.map((tag) => (
                    <Padding key={tag.id} padding="0 8px 0 0">
                      <WorkoutTag tag={tag.tag} icon={<TagIcon size="xs" />} />
                    </Padding>
                  ))}
                </FlexBox>
              </Padding>
            )}
            {workout.WorkoutGoals.length > 0 && (
              <Padding padding="0 0 8px 0">
                <FlexBox wrap="wrap" direction="row">
                  {workout.WorkoutGoals.map((goal) => (
                    <Padding key={goal.id} padding="0 8px 0 0">
                      <WorkoutTag
                        tag={goal.name}
                        icon={<TargetIcon size="xs" />}
                      />
                    </Padding>
                  ))}
                </FlexBox>
              </Padding>
            )}
            {(workout.coverImageUri || workout.introAudioUri) && (
              <FlexBox direction="row" padding="10px 0">
                {workout.coverImageUri && (
                  <MediaUIContainer>
                    <UploadcareImageWrapper uuid={workout.coverImageUri} />
                  </MediaUIContainer>
                )}

                {workout.introAudioUri && (
                  <UploadcareAudioPlayerWrapper uuid={workout.introAudioUri} />
                )}
              </FlexBox>
            )}
          </div>
          <FlexBox direction="row" justify="flex-end" wrap="wrap">
            {workout.introVideoUri && (
              <UploadcareVideoPlayerWrapper
                uuid={workout.introVideoUri}
                height="300px"
              />
            )}
          </FlexBox>
        </FlexBox>

        <ElevatedBox>
          <AdminActionsUI
            workout={workout}
            updateInProgress={updateInProgress}
            updateTags={(tags) => {
              update({
                variables: {
                  data: {
                    id: workout.id,
                    metaTags: tags,
                  },
                },
              })
            }}
            updateStatus={(status) =>
              update({
                variables: {
                  data: {
                    id: workout.id,
                    validated: status,
                  },
                },
                /// Refetch the public workout counts query and workout summaries queries (for each status) when you update workout the status.
                refetchQueries: [
                  { query: AdminPublicWorkoutCountsDocument },
                  ...[
                    PublicContentValidationStatus.Pending,
                    PublicContentValidationStatus.Valid,
                    PublicContentValidationStatus.Invalid,
                  ].map((status) => ({
                    query: AdminPublicWorkoutSummariesDocument,
                    variables: {
                      status,
                    },
                  })),
                ],
              })
            }
            updateDifficultyLevel={(level) =>
              update({
                variables: {
                  data: {
                    id: workout.id,
                    difficultyLevel: level,
                  },
                },
              })
            }
          />
        </ElevatedBox>

        {workout.WorkoutSections.length > 0 ? (
          <Padding padding="0 0 12px 0">
            {workout.WorkoutSections.map((wSection) => (
              <Padding key={wSection.id} padding="0 0 8px 0">
                <WorkoutSectionUI workoutSection={wSection} />
              </Padding>
            ))}
          </Padding>
        ) : (
          <ElevatedBox>
            <MainText>No sections defined</MainText>
          </ElevatedBox>
        )}
      </div>
    )
  }
}

///// Styled Components /////
export const MediaUIContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 6px;
  margin: 6px;
  max-width: 220px;
  max-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
