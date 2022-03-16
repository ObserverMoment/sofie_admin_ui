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
        <FlexBox align="start" justify="start" padding="12px">
          <Title>Public Users</Title>
          <UsersList users={publicUsers} />
        </FlexBox>

        <FlexBox align="start" justify="start" padding="12px">
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
        <FlexBox
          direction="row"
          wrap="wrap"
          align="start"
          gap="32px"
          justify="start"
        >
          {urlsAndNames.map((u) => (
            <FlexBox align="center" flexGrow={0}>
              <UserAvatar src={u.avatarUrl} size={100} />
              <Spacer bottom="8px" />
              <MainText fontSize="12px">{u.name}</MainText>
            </FlexBox>
          ))}
        </FlexBox>
      </ElevatedBox>
    )
  }
}
