import { useRouter } from 'next/router'
import styled from 'styled-components'
import Breadcrumbs from '../../../components/breadcrumbs'
import { WorkoutTag } from '../../../components/cardsAndTags/workoutTag'
import { TagIcon, TargetIcon } from '../../../components/icons'
import { LoadingDots } from '../../../components/loadingIndicators'
import { showToast } from '../../../components/notifications'
import AdminActionsUI from '../../../components/public-content/workoutDetails/adminActionsUI'
import WorkoutSectionUI from '../../../components/public-content/workoutDetails/workoutSectionUI'
import {
  ElevatedBox,
  FlexBox,
  MainText,
  MaxSizedBox,
  Padding,
  Title,
} from '../../../components/styled-components/styled'
import {
  useAdminPublicWorkoutByIdQuery,
  useUpdateWorkoutMetaDataAdminMutation,
} from '../../../graphql/generated_types'
import {
  UploadcareAudioPlayerWrapper,
  UploadcareImageWrapper,
  UploadcareVideoPlayerWrapper,
} from '../../../lib/uploadcareComponents'

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
            <Breadcrumbs pageTitle={workout.name} />
            {workout.description && (
              <Padding padding="0 0 8px 0">
                <MaxSizedBox maxWidth={800}>
                  <MainText>{workout.description}</MainText>
                </MaxSizedBox>
              </Padding>
            )}
            {workout.WorkoutTags.length > 0 && (
              <Padding padding="0 0 4px 0">
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
              <Padding padding="0 0 4px 0">
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
          </div>
          <FlexBox direction="row" justify="flex-end" wrap="wrap">
            {workout.introAudioUri ? (
              <UploadcareAudioPlayerWrapper uuid={workout.introAudioUri} />
            ) : (
              <ElevatedBox>
                <MainText>No intro audio</MainText>
              </ElevatedBox>
            )}

            {workout.introVideoUri ? (
              <UploadcareVideoPlayerWrapper
                uuid={workout.introVideoUri}
                width="240px"
              />
            ) : (
              <ElevatedBox>
                <MainText>No intro video</MainText>{' '}
              </ElevatedBox>
            )}

            {workout.coverImageUri ? (
              <MediaUIContainer>
                <UploadcareImageWrapper uuid={workout.coverImageUri} />
              </MediaUIContainer>
            ) : (
              <ElevatedBox>
                <MainText>No cover image</MainText>
              </ElevatedBox>
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
          <Padding padding="0 8px 0 0">
            <MainText>No sections defined</MainText>
          </Padding>
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
