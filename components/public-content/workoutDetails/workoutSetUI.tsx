import styled from 'styled-components'
import {
  WorkoutSectionType,
  WorkoutSet,
} from '../../../graphql/generated_types'
import {
  FlexBox,
  MainText,
  Padding,
  TinyText,
} from '../../styled-components/styled'
import WorkoutMoveUI from './workoutMoveUI'

interface WorkoutSetUIProps {
  workoutSet: WorkoutSet
  workoutSectionType: WorkoutSectionType
}

const WorkoutSetUI: React.FC<WorkoutSetUIProps> = ({
  workoutSet,
  workoutSectionType,
}) => (
  <WorkoutSetContainer>
    <FlexBox direction="row" justify="center">
      <WorkoutSetHeader
        workoutSet={workoutSet}
        workoutSectionType={workoutSectionType}
      />
    </FlexBox>

    {workoutSet.WorkoutMoves.length > 0 ? (
      [...workoutSet.WorkoutMoves]
        .sort((a, b) => a.sortPosition - b.sortPosition)
        .map((workoutMove) => (
          <WorkoutMoveUI key={workoutMove.id} workoutMove={workoutMove} />
        ))
    ) : (
      <MainText>No moves defined</MainText>
    )}
  </WorkoutSetContainer>
)

const WorkoutSetHeader: React.FC<WorkoutSetUIProps> = ({
  workoutSet,
  workoutSectionType,
}) => {
  const numMoves = workoutSet.WorkoutMoves.length

  const header =
    numMoves >= 4
      ? 'Giant Set'
      : numMoves === 3
      ? 'Tri Set'
      : numMoves === 2
      ? 'Super Set'
      : 'Set'

  const isTimedSet = ['HIIT Circuit', 'EMOM'].includes(workoutSectionType.name)

  const isRestSet =
    workoutSet.WorkoutMoves.length === 1 &&
    workoutSet.WorkoutMoves[0].Move.name === 'Rest'

  const isTimedOrRest = isTimedSet || isRestSet

  return (
    <FlexBox padding="4px 0" direction="row" justify="center" align="center">
      {!isRestSet && (
        <SetDefinitionTypeTag>
          <TinyText>{header}</TinyText>
        </SetDefinitionTypeTag>
      )}

      {isTimedOrRest && (
        <Padding padding="0 0 0 10px">
          <SetDefinitionTypeTag>
            <TinyText>{workoutSet.duration} seconds</TinyText>
          </SetDefinitionTypeTag>
        </Padding>
      )}
    </FlexBox>
  )
}

export default WorkoutSetUI

///// Styled Components ///////
const WorkoutSetContainer = styled.div`
  border-radius: 8px;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`

///// Styled Components //////
const SetDefinitionTypeTag = styled.span`
  padding: 0px 18px;
  border-radius: 30px;
  background-color: ${(p) => p.theme.colors.primaryLight};
`
