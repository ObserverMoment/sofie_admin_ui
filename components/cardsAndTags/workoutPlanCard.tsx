import { PublicWorkoutPlanSummaryAdmin } from '../../graphql/generated_types'
import { SummaryCard } from '../styled-components/cards'
import { SubTitle } from '../styled-components/styled'

interface WorkoutPlanSummaryCardProps {
  workoutPlan: PublicWorkoutPlanSummaryAdmin
  handleCardClick: (workoutPlan: PublicWorkoutPlanSummaryAdmin) => void
}

export const WorkoutPlanSummaryCard = ({
  workoutPlan,
  handleCardClick,
}: WorkoutPlanSummaryCardProps) => (
  <SummaryCard
    hoverCursor={true}
    margin="10px"
    onClick={() => handleCardClick(workoutPlan)}
  >
    <SubTitle>{workoutPlan.name}</SubTitle>
  </SummaryCard>
)
