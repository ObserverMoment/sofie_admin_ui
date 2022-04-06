import router from 'next/router'
import styled from 'styled-components'
import { PUBLIC_CONTENT_BASE_URL } from '../../../constants'
import { Workout, WorkoutPlanDay } from '../../../graphql/generated_types'
import { FlexBox, Spacer } from '../../../styles/layout'
import { MainText, TinyText } from '../../../styles/text'
import { ChevronIcon } from '../../icons'

interface WorkoutOnDayUIProps {
  workout: Workout
}

const WorkoutOnDayUI: React.FC<WorkoutOnDayUIProps> = ({ workout }) => (
  <FlexBox
    padding="6px 0"
    direction="row"
    align="center"
    onClick={() =>
      router.push(`${PUBLIC_CONTENT_BASE_URL}/workouts/${workout.id}`)
    }
    cursorHover
  >
    <MainText fontSize="14px">{workout.name}</MainText>
    <Spacer right="4px" />
    <ChevronIcon direction="right" />
  </FlexBox>
)

interface WorkoutPlanDayUIProps {
  dayNumber: number
  workoutPlanDay?: WorkoutPlanDay
}

/// Allows the Admin to update tags and validation status of a workout.
const WorkoutPlanDayUI: React.FC<WorkoutPlanDayUIProps> = ({
  dayNumber,
  workoutPlanDay,
}) => (
  <StyledWorkoutPlanDayUI>
    {workoutPlanDay ? (
      <FlexBox justify="center" height="100%">
        <TinyText>{dayNumber}</TinyText>
        <Spacer bottom="4px" />
        {[...workoutPlanDay.WorkoutPlanDayWorkouts]
          .sort((a, b) => a.sortPosition - b.sortPosition)
          .map((wpdw) => (
            <WorkoutOnDayUI workout={wpdw.Workout} />
          ))}
      </FlexBox>
    ) : (
      <div>
        <TinyText>{dayNumber}</TinyText>
        <FlexBox justify="center" align="center" padding="6px 0">
          <MainText colorType="lightGrey">Rest Day</MainText>
        </FlexBox>
      </div>
    )}
  </StyledWorkoutPlanDayUI>
)

export default WorkoutPlanDayUI

//// Styled Components ////
export const StyledWorkoutPlanDayUI = styled.div`
  box-shadow: 0 3px 16px 0px rgb(0 0 0 / 2%), 0 5px 8px -4px rgb(0 0 0 / 10%);
  padding: 16px;
  border-radius: 6px;
  margin: 8px 4px;
  width: 150px;
`
