import { useRouter } from 'next/router'
import styled from 'styled-components'
import { WorkoutTag } from '../../../components/cardsAndTags/workoutTag'
import { TagIcon } from '../../../components/icons'
import { LoadingDots } from '../../../components/loadingIndicators'
import { showToast } from '../../../components/notifications'
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
  useAdminPublicWorkoutPlanByIdQuery,
  useUpdateWorkoutPlanMetaDataAdminMutation,
} from '../../../graphql/generated_types'
import {
  UploadcareAudioPlayerWrapper,
  UploadcareImageWrapper,
  UploadcareVideoPlayerWrapper,
} from '../../../lib/uploadcareComponents'

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
      /// Refetch the public plan counts query.
      refetchQueries: [AdminPublicWorkoutPlanCountsDocument],
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

            {workoutPlan.description && (
              <Padding padding="0 0 8px 0">
                <MaxSizedBox maxWidth={800}>
                  <MainText>{workoutPlan.description}</MainText>
                </MaxSizedBox>
              </Padding>
            )}
            {workoutPlan.WorkoutTags.length > 0 && (
              <Padding padding="0 0 4px 0">
                <FlexBox wrap="wrap" direction="row">
                  {workoutPlan.WorkoutTags.map((tag) => (
                    <Padding key={tag.id} padding="0 8px 0 0">
                      <WorkoutTag tag={tag.tag} icon={<TagIcon size="xs" />} />
                    </Padding>
                  ))}
                </FlexBox>
              </Padding>
            )}
          </div>
          <FlexBox direction="row" justify="flex-end" wrap="wrap">
            {workoutPlan.introAudioUri ? (
              <UploadcareAudioPlayerWrapper uuid={workoutPlan.introAudioUri} />
            ) : (
              <ElevatedBox>
                <MainText>No intro audio</MainText>
              </ElevatedBox>
            )}

            {workoutPlan.introVideoUri ? (
              <UploadcareVideoPlayerWrapper
                uuid={workoutPlan.introVideoUri}
                width="240px"
              />
            ) : (
              <ElevatedBox>
                <MainText>No intro video</MainText>{' '}
              </ElevatedBox>
            )}

            {workoutPlan.coverImageUri ? (
              <MediaUIContainer>
                <UploadcareImageWrapper uuid={workoutPlan.coverImageUri} />
              </MediaUIContainer>
            ) : (
              <ElevatedBox>
                <MainText>No cover image</MainText>
              </ElevatedBox>
            )}
          </FlexBox>
        </FlexBox>

        <ElevatedBox>
          <MainText>Admin Actions</MainText>
        </ElevatedBox>

        <ElevatedBox>
          <MainText>Days of Plan</MainText>
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
