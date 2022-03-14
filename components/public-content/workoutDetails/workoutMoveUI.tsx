import styled from 'styled-components'
import {
  WorkoutMove,
  WorkoutMoveRepType,
} from '../../../graphql/generated_types'
import {
  FlexBox,
  MainText,
  Padding,
  Spacer,
  TinyText,
} from '../../styled-components/styled'

interface WorkoutMoveUIProps {
  workoutMove: WorkoutMove
}

const WorkoutMoveUI: React.FC<WorkoutMoveUIProps> = ({ workoutMove }) => (
  <FlexBox direction="row" padding="6px 0">
    <FlexBox direction="column">
      <FlexBox direction="row" align="center" wrap="wrap">
        <MainText>{workoutMove.Move.name}</MainText>
        <Spacer right="6px" />
        {workoutMove.Move.BodyAreaMoveScores.map((bams) => (
          <BodyAreaTag>
            <TinyText>{bams.BodyArea.name}</TinyText>
          </BodyAreaTag>
        ))}
      </FlexBox>

      {workoutMove.Equipment && (
        <MainText fontSize="12px" colorType="highlight">
          {workoutMove.Equipment.name}
        </MainText>
      )}
    </FlexBox>

    <FlexBox direction="row" justify="end">
      {workoutMove.loadAmount > 0 && (
        <Padding padding="0 32px 0 12px">
          <WorkoutMoveLoadDisplay workoutMove={workoutMove} />
        </Padding>
      )}
      <Padding padding="0 16px 0 0">
        <WorkoutMoveRepDisplay workoutMove={workoutMove} />
      </Padding>
    </FlexBox>
  </FlexBox>
)

interface WorkoutMoveLoadDisplayProps {
  workoutMove: WorkoutMove
}

const WorkoutMoveLoadDisplay: React.FC<WorkoutMoveLoadDisplayProps> = ({
  workoutMove,
}) => (
  <MainText>
    {workoutMove.loadAmount} {workoutMove.loadUnit}
  </MainText>
)

interface WorkoutMoveRepDisplayProps {
  workoutMove: WorkoutMove
}

const WorkoutMoveRepDisplay: React.FC<WorkoutMoveRepDisplayProps> = ({
  workoutMove,
}) => {
  const repUnit =
    workoutMove.repType === WorkoutMoveRepType.Time
      ? workoutMove.timeUnit
      : workoutMove.repType === WorkoutMoveRepType.Distance
      ? workoutMove.distanceUnit
      : workoutMove.repType.toString()

  return (
    <MainText>
      {workoutMove.reps} {repUnit}
    </MainText>
  )
}

export default WorkoutMoveUI

///// Styled Components //////
const BodyAreaTag = styled.span`
  padding: 0 4px;
  margin: 2px;
  border-radius: 2px;
  background-color: ${(p) => p.theme.colors.primaryLight};
`
