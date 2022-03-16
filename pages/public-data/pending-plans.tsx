import router from 'next/router'
import Breadcrumbs from '../../components/breadcrumbs'
import { WorkoutPlanSummaryCard } from '../../components/cardsAndTags/workoutPlanCard'
import { LoadingDots } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import {
  FlexBox,
  MainText,
  Padding,
} from '../../components/styled-components/styled'
import { PUBLIC_CONTENT_BASE_URL } from '../../constants'
import {
  PublicContentValidationStatus,
  PublicWorkoutPlanSummaryAdmin,
  useAdminPublicWorkoutPlanSummariesQuery,
} from '../../graphql/generated_types'

export default function PublicWorkoutPlansPending() {
  const { loading, error, data } = useAdminPublicWorkoutPlanSummariesQuery({
    variables: {
      status: PublicContentValidationStatus.Pending,
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
          pageTitle={`Pending Plans (${data.adminPublicWorkoutPlanSummaries.length})`}
        />
        <FlexBox direction="row" wrap="wrap" padding="12px 0">
          {data.adminPublicWorkoutPlanSummaries.length ? (
            data.adminPublicWorkoutPlanSummaries.map((w) => (
              <WorkoutPlanSummaryCard
                key={w.id}
                workoutPlan={w as PublicWorkoutPlanSummaryAdmin}
                handleCardClick={() =>
                  router.push(`${PUBLIC_CONTENT_BASE_URL}/plans/${w.id}`)
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
