import { useRouter } from 'next/router'
import styled from 'styled-components'
import { WorkoutTag } from '../../../components/cardsAndTags/workoutTag'
import { TagIcon } from '../../../components/icons'
import { LoadingDots } from '../../../components/loadingIndicators'
import { showToast } from '../../../components/notifications'
import AdminActionsUI from '../../../components/public-content/workoutPlanDetails.tsx/adminActionsUI'
import WorkoutPlanWeekUI from '../../../components/public-content/workoutPlanDetails.tsx/workoutPlanWeekUI'
import { BackButton } from '../../../components/styled-components/buttons'
import {
  ElevatedBox,
  FlexBox,
  MainText,
  MaxSizedBox,
  Padding,
  Spacer,
  SubTitle,
  Title,
} from '../../../components/styled-components/styled'
import {
  AdminPublicWorkoutPlanCountsDocument,
  AdminPublicWorkoutPlanSummariesDocument,
  PublicContentValidationStatus,
  useAdminPublicWorkoutPlanByIdQuery,
  useUpdateWorkoutPlanMetaDataAdminMutation,
  WorkoutPlanDay,
} from '../../../graphql/generated_types'
import {
  UploadcareAudioPlayerWrapper,
  UploadcareImageWrapper,
  UploadcareVideoPlayerWrapper,
} from '../../../lib/uploadcareComponents'

interface WorkoutsByPlanDayObject {
  [dayNumber: number]: WorkoutPlanDay
}

export default function WorkoutPlanDetails() {
  const router = useRouter()
  const { planId } = router.query

  const { loading, error, data } = useAdminPublicWorkoutPlanByIdQuery({
    variables: {
      id: planId as string,
    },
  })

  const [update, { loading: updateInProgress, reset }] =
    useUpdateWorkoutPlanMetaDataAdminMutation({
      onCompleted() {
        showToast('Plan Meta Data Updated', 'Success')
        reset()
      },
      onError() {
        showToast('API error updating Plan!', 'Error')
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
    const workoutPlan = data.adminPublicWorkoutPlanById

    console.log('workoutPlan.WorkoutPlanDays.length')
    console.log(workoutPlan.WorkoutPlanDays.length)

    console.log(workoutPlan.WorkoutPlanDays.map((o) => o.dayNumber))

    return (
      <div>
        <FlexBox direction="row">
          <div>
            <FlexBox direction="row" padding="0 0 10px 0">
              <BackButton />
              <Spacer right="4px" />
              <SubTitle>/</SubTitle>
              <Spacer right="4px" />
              <Title>{workoutPlan.name}</Title>
            </FlexBox>

            <FlexBox direction="row" padding="0 0 6px 0">
              <SubTitle>Total Weeks: </SubTitle>
              <Spacer right="4px" />
              <Title>{workoutPlan.lengthWeeks}</Title>
            </FlexBox>

            <FlexBox direction="row" padding="0 0 6px 0">
              <SubTitle>Days Per Week: </SubTitle>
              <Spacer right="4px" />
              <Title>{workoutPlan.daysPerWeek}</Title>
            </FlexBox>

            {workoutPlan.description && (
              <Padding padding="0 0 8px 0">
                <MaxSizedBox maxWidth={800}>
                  <MainText>{workoutPlan.description}</MainText>
                </MaxSizedBox>
              </Padding>
            )}

            {workoutPlan.WorkoutTags.length > 0 && (
              <Padding padding="0 0 8px 0">
                <FlexBox wrap="wrap" direction="row">
                  {workoutPlan.WorkoutTags.map((tag) => (
                    <Padding key={tag.id} padding="0 8px 0 0">
                      <WorkoutTag tag={tag.tag} icon={<TagIcon size="xs" />} />
                    </Padding>
                  ))}
                </FlexBox>
              </Padding>
            )}

            {(workoutPlan.coverImageUri || workoutPlan.introAudioUri) && (
              <FlexBox direction="row" padding="10px 0">
                {workoutPlan.coverImageUri && (
                  <MediaUIContainer>
                    <UploadcareImageWrapper uuid={workoutPlan.coverImageUri} />
                  </MediaUIContainer>
                )}

                {workoutPlan.introAudioUri && (
                  <UploadcareAudioPlayerWrapper
                    uuid={workoutPlan.introAudioUri}
                  />
                )}
              </FlexBox>
            )}
          </div>

          <FlexBox direction="row" justify="flex-end" wrap="wrap">
            {workoutPlan.introVideoUri && (
              <UploadcareVideoPlayerWrapper
                uuid={workoutPlan.introVideoUri}
                height="300px"
              />
            )}
          </FlexBox>
        </FlexBox>

        <ElevatedBox>
          <AdminActionsUI
            workoutPlan={workoutPlan}
            updateInProgress={updateInProgress}
            updateTags={(tags) => {
              update({
                variables: {
                  data: {
                    id: workoutPlan.id,
                    metaTags: tags,
                  },
                },
              })
            }}
            updateStatus={(status) =>
              update({
                variables: {
                  data: {
                    id: workoutPlan.id,
                    validated: status,
                  },
                },
                /// Refetch the public workout counts query and workout summaries queries (for each status) when you update workout the status.
                refetchQueries: [
                  { query: AdminPublicWorkoutPlanCountsDocument },
                  ...[
                    PublicContentValidationStatus.Pending,
                    PublicContentValidationStatus.Valid,
                    PublicContentValidationStatus.Invalid,
                  ].map((status) => ({
                    query: AdminPublicWorkoutPlanSummariesDocument,
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
                    id: workoutPlan.id,
                    difficultyLevel: level,
                  },
                },
              })
            }
          />
        </ElevatedBox>

        <ElevatedBox>
          {Array.from(Array(workoutPlan.lengthWeeks).keys()).map((i) => (
            <WorkoutPlanWeekUI
              weekIndex={i}
              workoutPlanDays={workoutPlan.WorkoutPlanDays.filter(
                (wpd) => Math.floor(wpd.dayNumber / 7) === i,
              )}
            />
          ))}
        </ElevatedBox>
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
