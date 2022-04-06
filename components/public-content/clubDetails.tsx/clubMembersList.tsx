import styled from 'styled-components'
import { UserAvatarData } from '../../../graphql/generated_types'
import {
  UploadcareApiStatus,
  useGetUploadcareUrls,
} from '../../../services/uploadcareComponents'
import { FlexBox, Spacer } from '../../../styles/layout'
import { MainText, TinyText, Title } from '../../../styles/text'
import { UserAvatar } from '../../cardsAndTags/userAvatar'
import { LoadingDots } from '../../loadingIndicators'

interface ClubMembersListUIProps {
  memberType: MemberType
  members: UserAvatarData[]
}

type MemberType = 'Owner' | 'Admin' | 'Member'

const memberTypeToDisplayMap = {
  Owner: 'Owner',
  Admin: 'Admins',
  Member: 'Members',
}

/// Allows the Admin to update tags and validation status of a workout.
const ClubMembersListUI: React.FC<ClubMembersListUIProps> = ({
  memberType,
  members,
}) => {
  const { status, urlsAndNames } = useGetUploadcareUrls(members)

  if (status === UploadcareApiStatus.Error) {
    return <MainText>Unable to load member info</MainText>
  } else if (status === UploadcareApiStatus.Loading) {
    return <LoadingDots size={30} />
  } else {
    return (
      <FlexBox>
        <Title>{memberTypeToDisplayMap[memberType]}</Title>
        <Spacer bottom="10px" />
        <FlexBox direction="row" justify="start" gap="24px">
          {urlsAndNames.map((u) => (
            <FlexBox key={u.name} align="center" flexGrow={0}>
              <UserAvatar size={100} src={u.avatarUrl} />
              <Spacer bottom="4px" />
              <StyledUserNameText>{u.name}</StyledUserNameText>
            </FlexBox>
          ))}
        </FlexBox>
      </FlexBox>
    )
  }
}

export default ClubMembersListUI

//// Styled Components ////
const StyledUserNameText = styled(TinyText)`
  overflow-wrap: break-word;
  width: 100px;
  text-align: center;
`
