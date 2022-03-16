import { UserAvatar } from '../../components/cardsAndTags/userAvatar'
import { LoadingDots } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import {
  ElevatedBox,
  FlexBox,
  MainText,
  Spacer,
  Title,
} from '../../components/styled-components/styled'
import {
  useAdminAllUsersQuery,
  UserProfileScope,
  UserProfileSummary,
} from '../../graphql/generated_types'
import {
  UploadcareApiStatus,
  useGetUploadcareUrls,
} from '../../lib/uploadcareComponents'

export default function Overview() {
  const { loading, error, data } = useAdminAllUsersQuery()

  console.log(data)

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingDots />
  } else {
    const privateUsers = data.adminAllUsers.filter(
      (u) => u.userProfileScope === UserProfileScope.Private,
    )

    const publicUsers = data.adminAllUsers.filter(
      (u) => u.userProfileScope === UserProfileScope.Public,
    )

    return (
      <FlexBox>
        <FlexBox align="flex-start">
          <Title>Public Users</Title>
          <UsersList users={publicUsers} />
        </FlexBox>

        <FlexBox align="flex-start">
          <Title>Private Users</Title>
          <UsersList users={privateUsers} />
        </FlexBox>
      </FlexBox>
    )
  }
}

interface UsersListProps {
  users: UserProfileSummary[]
}

const UsersList: React.FC<UsersListProps> = ({ users }) => {
  const { status, urlsAndNames } = useGetUploadcareUrls(
    users.map((u) => ({
      id: u.id,
      displayName: u.displayName,
      avatarUri: u.avatarUri,
    })),
  )

  if (status === UploadcareApiStatus.Error) {
    return <MainText>Unable to load user info</MainText>
  } else if (status === UploadcareApiStatus.Loading) {
    return <LoadingDots size={30} />
  } else {
    return (
      <ElevatedBox>
        <FlexBox direction="row" wrap="wrap">
          {urlsAndNames.map((u) => (
            <FlexBox padding="0 16px 0 0 " align="center" justify="center">
              <UserAvatar src={u.avatarUrl} size={140} />
              <Spacer bottom="8px" />
              <MainText>{u.name}</MainText>
            </FlexBox>
          ))}
        </FlexBox>
      </ElevatedBox>
    )
  }
}
