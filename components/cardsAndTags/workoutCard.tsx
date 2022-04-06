import { PublicWorkoutSummaryAdmin } from '../../graphql/generated_types'
import { SummaryCard } from '../../styles/cards'
import { SubTitle } from '../../styles/text'

interface WorkoutSummaryCardProps {
  workout: PublicWorkoutSummaryAdmin
  handleCardClick: (workout: PublicWorkoutSummaryAdmin) => void
}

export const WorkoutSummaryCard = ({
  workout,
  handleCardClick,
}: WorkoutSummaryCardProps) => (
  <SummaryCard
    hoverCursor={true}
    margin="10px"
    onClick={() => handleCardClick(workout)}
  >
    <SubTitle>{workout.name}</SubTitle>
  </SummaryCard>
)
