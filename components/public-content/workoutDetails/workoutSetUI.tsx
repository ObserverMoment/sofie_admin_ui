import styled from 'styled-components'
import { WorkoutSet } from '../../../graphql/generated_types'
import {
  FlexBox,
  MainText,
  Padding,
  TinyText,
} from '../../styled-components/styled'
import WorkoutMoveUI from './workoutMoveUI'

interface WorkoutSetUIProps {
  workoutSet: WorkoutSet
}

const WorkoutSetUI: React.FC<WorkoutSetUIProps> = ({ workoutSet }) => (
  <WorkoutSetContainer>
    <FlexBox direction="row" justify="center">
      <WorkoutSetHeader workoutSet={workoutSet} />
    </FlexBox>

    {workoutSet.WorkoutMoves.length > 0 ? (
      workoutSet.WorkoutMoves.map((workoutMove) => (
        <WorkoutMoveUI key={workoutMove.id} workoutMove={workoutMove} />
      ))
    ) : (
      <MainText>No moves defined</MainText>
    )}
  </WorkoutSetContainer>
)

interface WorkoutSetHeaderProps {
  workoutSet: WorkoutSet
}

const WorkoutSetHeader: React.FC<WorkoutSetHeaderProps> = ({ workoutSet }) => {
  const numMoves = workoutSet.WorkoutMoves.length

  const header =
    numMoves >= 4
      ? 'Giant Set'
      : numMoves === 3
      ? 'Tri Set'
      : numMoves === 2
      ? 'Super Set'
      : 'Set'

  return (
    <Padding padding="4px 0">
      <SetDefinitionTypeTag>
        <TinyText>{header}</TinyText>
      </SetDefinitionTypeTag>
    </Padding>
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
