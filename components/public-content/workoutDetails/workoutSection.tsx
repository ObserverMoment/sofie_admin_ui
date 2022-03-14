import { WorkoutSection } from '../../../graphql/generated_types'
import { ElevatedBox, MainText, SubTitle } from '../../styled-components/styled'
import WorkoutSetUI from './workoutSetUI'

interface WorkoutSectionUIProps {
  workoutSection: WorkoutSection
}

const WorkoutSectionUI: React.FC<WorkoutSectionUIProps> = ({
  workoutSection,
}) => (
  <ElevatedBox>
    {workoutSection.name && <SubTitle>{workoutSection.name}</SubTitle>}
    <SubTitle>{workoutSection.WorkoutSectionType.name}</SubTitle>
    {workoutSection.WorkoutSets.length > 0 ? (
      workoutSection.WorkoutSets.map((wSet) => (
        <WorkoutSetUI workoutSet={wSet} />
      ))
    ) : (
      <MainText>No sets defined</MainText>
    )}
  </ElevatedBox>
)

export default WorkoutSectionUI
