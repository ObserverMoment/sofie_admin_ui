import router from 'next/router'
import { WorkoutSummaryCard } from '../../../components/cardsAndTags/workoutCard'
import { LoadingSpinner } from '../../../components/loadingIndicators'
import { showToast } from '../../../components/notifications'
import {
  FlexBox,
  MainText,
  Padding,
  Title,
} from '../../../components/styled-components/styled'
import { PUBLIC_CONTENT_BASE_URL } from '../../../constants'
import {
  PublicContentValidationStatus,
  PublicWorkoutSummaryAdmin,
  useAdminPublicWorkoutSummariesQuery,
} from '../../../graphql/generated_types'

export default function PublicWorkoutsInvalidated() {
  const { loading, error, data } = useAdminPublicWorkoutSummariesQuery({
    variables: {
      status: PublicContentValidationStatus.Invalid,
    },
  })

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <FlexBox>
        <Title>Invalidated Workouts</Title>
        <FlexBox direction="row" wrap="wrap">
          {data.adminPublicWorkoutSummaries.length ? (
            data.adminPublicWorkoutSummaries.map((w) => (
              <WorkoutSummaryCard
                workout={w as PublicWorkoutSummaryAdmin}
                handleCardClick={() =>
                  router.push(`${PUBLIC_CONTENT_BASE_URL}/workouts/${w.id}`)
                }
              />
            ))
          ) : (
            <Padding>
              <MainText>No invalid Workouts to display</MainText>
            </Padding>
          )}
        </FlexBox>
      </FlexBox>
    )
  }
}
