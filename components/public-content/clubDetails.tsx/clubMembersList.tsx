import { UserAvatarData } from '../../../graphql/generated_types'
import {
  UploadcareApiStatus,
  useGetUploadcareUrls,
} from '../../../lib/uploadcareComponents'
import { UserAvatar } from '../../cardsAndTags/userAvatar'
import { LoadingDots } from '../../loadingIndicators'
import {
  FlexBox,
  MainText,
  Spacer,
  TinyText,
  Title,
} from '../../styled-components/styled'

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
        <FlexBox direction="row" justify="start">
          {urlsAndNames.map((u) => (
            <FlexBox
              key={u.name}
              align="center"
              justify="center"
              flexGrow={0}
              gap="16px"
            >
              <UserAvatar size={100} src={u.avatarUrl} />
              <Spacer bottom="4px" />
              <TinyText>{u.name}</TinyText>
            </FlexBox>
          ))}
        </FlexBox>
      </FlexBox>
    )
  }
}

export default ClubMembersListUI
