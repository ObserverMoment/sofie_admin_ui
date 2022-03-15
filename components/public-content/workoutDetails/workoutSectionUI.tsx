import { WorkoutSection } from '../../../graphql/generated_types'
import {
  UploadcareAudioPlayerWrapper,
  UploadcareVideoPlayerWrapper,
} from '../../../lib/uploadcareComponents'
import {
  ElevatedBox,
  FlexBox,
  MainText,
  Spacer,
  SubTitle,
  Title,
} from '../../styled-components/styled'
import WorkoutSetUI from './workoutSetUI'

interface WorkoutSectionUIProps {
  workoutSection: WorkoutSection
}

const WorkoutSectionUI: React.FC<WorkoutSectionUIProps> = ({
  workoutSection,
}) => (
  <ElevatedBox>
    <FlexBox direction="row" justify="flex-start">
      {workoutSection.classAudioUri && (
        <UploadcareAudioPlayerWrapper uuid={workoutSection.classAudioUri} />
      )}

      {workoutSection.classVideoUri && (
        <UploadcareVideoPlayerWrapper
          uuid={workoutSection.classVideoUri}
          width="240px"
        />
      )}
    </FlexBox>
    <Spacer bottom="10px"></Spacer>

    {workoutSection.name && <Title>{workoutSection.name}</Title>}
    <Title fontSize="16px">{workoutSection.WorkoutSectionType.name}</Title>
    <Spacer bottom="10px"></Spacer>

    {workoutSection.WorkoutSets.length > 0 ? (
      workoutSection.WorkoutSets.map((wSet) => (
        <WorkoutSetUI key={wSet.id} workoutSet={wSet} />
      ))
    ) : (
      <MainText>No sets defined</MainText>
    )}
  </ElevatedBox>
)

export default WorkoutSectionUI
