import { useRouter } from 'next/router'
import { WorkoutTag } from '../../../components/cardsAndTags/workoutTag'
import { TagIcon, TargetIcon } from '../../../components/images'
import { LoadingSpinner } from '../../../components/loadingIndicators'
import { showToast } from '../../../components/notifications'
import AdminActionsUI from '../../../components/public-content/workoutDetails/adminActionsUI'
import WorkoutSectionUI from '../../../components/public-content/workoutDetails/workoutSection'
import {
  ElevatedBox,
  FlexBox,
  MainText,
  MaxSizedBox,
  Padding,
  Title,
} from '../../../components/styled-components/styled'
import { useAdminPublicWorkoutByIdQuery } from '../../../graphql/generated_types'

export default function WorkoutDetails() {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useAdminPublicWorkoutByIdQuery({
    variables: {
      id: id as string,
    },
  })

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    const workout = data.adminPublicWorkoutById

    return (
      <div>
        <FlexBox direction="row">
          <div>
            <Title>{workout.name}</Title>
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
                    <WorkoutTag tag={tag.tag} icon={<TagIcon size="xs" />} />
                  ))}
                </FlexBox>
              </Padding>
            )}
            {workout.WorkoutGoals.length > 0 && (
              <Padding padding="0 0 4px 0">
                <FlexBox wrap="wrap" direction="row">
                  {workout.WorkoutGoals.map((goal) => (
                    <Padding padding="0 8px 0 0">
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
          <FlexBox direction="row" justify="flex-end">
            <ElevatedBox>
              <MainText>TODO: Intro Video</MainText>
            </ElevatedBox>
            <ElevatedBox>
              <MainText>TODO: Intro Audio</MainText>
            </ElevatedBox>
            {workout.coverImageUri ? (
              <img
                style={{ borderRadius: '20px' }}
                height="400px"
                src={`https://ucarecdn.com/${workout.coverImageUri}/`}
              />
            ) : (
              <ElevatedBox>
                <MainText>No cover image</MainText>
              </ElevatedBox>
            )}
          </FlexBox>
        </FlexBox>

        <ElevatedBox>
          <AdminActionsUI />
        </ElevatedBox>

        {workout.WorkoutSections.length > 0 ? (
          <Padding padding="0 0 12px 0">
            {workout.WorkoutSections.map((wSection) => (
              <Padding padding="0 0 8px 0">
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
