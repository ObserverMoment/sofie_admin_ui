import { WorkoutPlanDay } from '../../../graphql/generated_types'
import { FlexBox, Padding } from '../../../styles/layout'
import { SubTitle } from '../../../styles/text'
import WorkoutPlanDayUI from './workoutPlanDayUI'

interface WorkoutPlanWeekUIProps {
  weekIndex: number
  workoutPlanDays: WorkoutPlanDay[]
}

/// Allows the Admin to update tags and validation status of a workout.
const WorkoutPlanWeekUI: React.FC<WorkoutPlanWeekUIProps> = ({
  weekIndex,
  workoutPlanDays,
}) => (
  <Padding padding="0 0 12px 0">
    <div>
      <SubTitle>Week {weekIndex + 1}</SubTitle>

      <FlexBox direction="row" wrap="wrap">
        {Array.from(Array(7).keys()).map((i) => (
          <WorkoutPlanDayUI
            dayNumber={weekIndex * 7 + i + 1}
            workoutPlanDay={workoutPlanDays.find(
              (wpd) => weekIndex * 7 + i === wpd.dayNumber,
            )}
          />
        ))}
      </FlexBox>
    </div>
  </Padding>
)

export default WorkoutPlanWeekUI
