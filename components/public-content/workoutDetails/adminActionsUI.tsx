import { FlexBox, MainText } from '../../styled-components/styled'

/// Allows the Admin to update tags and validation status of a workout.
const AdminActionsUI = () => (
  <FlexBox direction="row">
    <MainText>Status</MainText>
    <MainText>Difficulty</MainText>
    <MainText>Tags</MainText>
  </FlexBox>
)

export default AdminActionsUI
