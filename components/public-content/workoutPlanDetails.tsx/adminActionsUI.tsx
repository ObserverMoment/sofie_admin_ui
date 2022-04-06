import {
  DifficultyLevel,
  PublicContentValidationStatus,
  WorkoutPlanWithMetaDataAdmin,
} from '../../../graphql/generated_types'
import { FlexBox, SizedBox } from '../../../styles/layout'
import { Title } from '../../../styles/text'
import RadioButtons from '../../forms/inputs/radioButtons'
import { TagsInputEditor } from '../../forms/inputs/tagsInputEditor'
import { StyledInputGroup, StyledLabel } from '../../forms/styled'
import { LoadingDots } from '../../loadingIndicators'

interface AdminActionsUIProps {
  workoutPlan: WorkoutPlanWithMetaDataAdmin
  updateInProgress: boolean
  updateTags: (tags: string[]) => void
  updateStatus: (status: PublicContentValidationStatus) => void
  updateDifficultyLevel: (difficultyLevel: DifficultyLevel) => void
}

/// Allows the Admin to update tags and validation status of a workout.
const AdminActionsUI: React.FC<AdminActionsUIProps> = ({
  workoutPlan,
  updateInProgress,
  updateTags,
  updateStatus,
  updateDifficultyLevel,
}) => (
  <FlexBox>
    <FlexBox direction="row" height="30px" align="center">
      <Title>Meta Data</Title>
      {updateInProgress && (
        <SizedBox width={50}>
          <LoadingDots size={26} />
        </SizedBox>
      )}
    </FlexBox>

    <FlexBox direction="row">
      <StyledInputGroup>
        <StyledLabel>Validated Status</StyledLabel>

        <RadioButtons<PublicContentValidationStatus>
          options={[
            {
              value: PublicContentValidationStatus.Pending,
              label: PublicContentValidationStatus.Pending.toString(),
            },
            {
              value: PublicContentValidationStatus.Valid,
              label: PublicContentValidationStatus.Valid.toString(),
            },
            {
              value: PublicContentValidationStatus.Invalid,
              label: PublicContentValidationStatus.Invalid.toString(),
            },
          ]}
          value={workoutPlan.validated}
          setValue={updateStatus}
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel>Difficulty</StyledLabel>
        <RadioButtons<DifficultyLevel>
          options={[
            {
              value: DifficultyLevel.Light,
              label: DifficultyLevel.Light.toString(),
            },
            {
              value: DifficultyLevel.Challenging,
              label: DifficultyLevel.Challenging.toString(),
            },
            {
              value: DifficultyLevel.Intermediate,
              label: DifficultyLevel.Intermediate.toString(),
            },
            {
              value: DifficultyLevel.Advanced,
              label: DifficultyLevel.Advanced.toString(),
            },
            {
              value: DifficultyLevel.Elite,
              label: DifficultyLevel.Elite.toString(),
            },
          ]}
          value={workoutPlan.difficultyLevel}
          setValue={updateDifficultyLevel}
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <StyledLabel>Meta Tags</StyledLabel>
        <TagsInputEditor tags={workoutPlan.metaTags} updateTags={updateTags} />
      </StyledInputGroup>
    </FlexBox>
  </FlexBox>
)

export default AdminActionsUI
