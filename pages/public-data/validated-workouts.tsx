import router from 'next/router'
import Breadcrumbs from '../../components/breadcrumbs'
import { WorkoutSummaryCard } from '../../components/cardsAndTags/workoutCard'
import { LoadingDots } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import { FlexBox, Padding } from '../../styles/layout'
import { MainText } from '../../styles/text'
import { PUBLIC_CONTENT_BASE_URL } from '../../constants'
import {
  PublicContentValidationStatus,
  PublicWorkoutSummaryAdmin,
  useAdminPublicWorkoutSummariesQuery,
} from '../../graphql/generated_types'

export default function PublicWorkoutsValidated() {
  const { loading, error, data } = useAdminPublicWorkoutSummariesQuery({
    variables: {
      status: PublicContentValidationStatus.Valid,
    },
  })

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingDots />
  } else {
    return (
      <FlexBox padding="6px 0">
        <Breadcrumbs
          pageTitle={`Validated Workouts (${data.adminPublicWorkoutSummaries.length})`}
        />
        <FlexBox direction="row" wrap="wrap" padding="12px 0">
          {data.adminPublicWorkoutSummaries.length ? (
            data.adminPublicWorkoutSummaries.map((w) => (
              <WorkoutSummaryCard
                key={w.id}
                workout={w as PublicWorkoutSummaryAdmin}
                handleCardClick={() =>
                  router.push(`${PUBLIC_CONTENT_BASE_URL}/workouts/${w.id}`)
                }
              />
            ))
          ) : (
            <Padding>
              <MainText>None to display</MainText>
            </Padding>
          )}
        </FlexBox>
      </FlexBox>
    )
  }
}
