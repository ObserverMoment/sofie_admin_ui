import {
  ClubWithMetaDataAdmin,
  PublicContentValidationStatus,
} from '../../../graphql/generated_types'
import RadioButtons from '../../forms/inputs/radioButtons'
import { TagsInputEditor } from '../../forms/inputs/tagsInputEditor'
import { StyledInputGroup, StyledLabel } from '../../forms/styled'
import { LoadingDots } from '../../loadingIndicators'
import { FlexBox, SizedBox, Title } from '../../styled-components/styled'

interface AdminActionsUIProps {
  club: ClubWithMetaDataAdmin
  updateInProgress: boolean
  updateTags: (tags: string[]) => void
  updateStatus: (status: PublicContentValidationStatus) => void
}

/// Allows the Admin to update tags and validation status of a workout.
const AdminActionsUI: React.FC<AdminActionsUIProps> = ({
  club,
  updateInProgress,
  updateTags,
  updateStatus,
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
          value={club.validated}
          setValue={updateStatus}
        />
      </StyledInputGroup>

      <StyledInputGroup>
        <StyledLabel>Meta Tags</StyledLabel>
        <TagsInputEditor tags={club.metaTags} updateTags={updateTags} />
      </StyledInputGroup>
    </FlexBox>
  </FlexBox>
)

export default AdminActionsUI
