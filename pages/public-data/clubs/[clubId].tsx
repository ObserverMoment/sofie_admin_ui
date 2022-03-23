import { format } from 'date-fns'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { LoadingDots } from '../../../components/loadingIndicators'
import { showToast } from '../../../components/notifications'
import AdminActionsUI from '../../../components/public-content/clubDetails.tsx/adminActionsUI'
import ClubMembersListUI from '../../../components/public-content/clubDetails.tsx/clubMembersList'
import { BackButton } from '../../../components/styled-components/buttons'
import {
  ElevatedBox,
  FlexBox,
  MainText,
  MaxSizedBox,
  Padding,
  Spacer,
  SubTitle,
  TinyText,
  Title,
} from '../../../components/styled-components/styled'
import {
  AdminPublicClubCountsDocument,
  AdminPublicClubSummariesDocument,
  PublicContentValidationStatus,
  useAdminPublicClubByIdQuery,
  useUpdateClubMetaDataAdminMutation,
} from '../../../graphql/generated_types'
import {
  UploadcareAudioPlayerWrapper,
  UploadcareImageWrapper,
  UploadcareVideoPlayerWrapper,
} from '../../../lib/uploadcareComponents'

export default function ClubDetails() {
  const router = useRouter()
  const { clubId } = router.query

  const { loading, error, data } = useAdminPublicClubByIdQuery({
    variables: {
      id: clubId as string,
    },
  })

  const [update, { loading: updateInProgress, reset }] =
    useUpdateClubMetaDataAdminMutation({
      onCompleted() {
        showToast('Club Meta Data Updated', 'Success')
        reset()
      },
      onError() {
        showToast('API error updating Club!', 'Error')
        reset()
      },
    })

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingDots />
  } else {
    const club = data.adminPublicClubById

    return (
      <div>
        <FlexBox direction="row">
          <div>
            <FlexBox direction="row" padding="0 0 10px 0">
              <BackButton />
              <Spacer right="4px" />
              <SubTitle>/</SubTitle>
              <Spacer right="4px" />
              <Title>{club.name}</Title>
            </FlexBox>

            {club.location && (
              <Padding padding="0 0 8px 0">
                <SubTitle>{club.location}</SubTitle>
              </Padding>
            )}

            <Padding padding="0 0 8px 0">
              <TinyText>
                Created on {format(new Date(club.createdAt), 'PPP')}
              </TinyText>
            </Padding>

            {club.description && (
              <Padding padding="0 0 8px 0">
                <MaxSizedBox maxWidth={800}>
                  <MainText>{club.description}</MainText>
                </MaxSizedBox>
              </Padding>
            )}

            <FlexBox direction="row">
              {club.coverImageUri && (
                <MediaUIContainer>
                  <UploadcareImageWrapper uuid={club.coverImageUri} />
                </MediaUIContainer>
              )}
              {club.introAudioUri && (
                <UploadcareAudioPlayerWrapper uuid={club.introAudioUri} />
              )}
            </FlexBox>
          </div>
          <FlexBox direction="row" justify="flex-end" wrap="wrap">
            {club.introVideoUri && (
              <UploadcareVideoPlayerWrapper
                uuid={club.introVideoUri}
                height="300px"
              />
            )}
          </FlexBox>
        </FlexBox>

        <ElevatedBox>
          <AdminActionsUI
            club={club}
            updateInProgress={updateInProgress}
            updateTags={(tags) => {
              update({
                variables: {
                  data: {
                    id: club.id,
                    metaTags: tags,
                  },
                },
              })
            }}
            updateStatus={(status) =>
              update({
                variables: {
                  data: {
                    id: club.id,
                    validated: status,
                  },
                },
                /// Refetch the public workout counts query and workout summaries queries (for each status) when you update workout the status.
                refetchQueries: [
                  { query: AdminPublicClubCountsDocument },
                  ...[
                    PublicContentValidationStatus.Pending,
                    PublicContentValidationStatus.Valid,
                    PublicContentValidationStatus.Invalid,
                  ].map((status) => ({
                    query: AdminPublicClubSummariesDocument,
                    variables: {
                      status,
                    },
                  })),
                ],
              })
            }
          />
        </ElevatedBox>

        <ElevatedBox>
          <ClubMembersListUI memberType="Owner" members={[club.Owner]} />
        </ElevatedBox>

        <ElevatedBox>
          {club.Admins.length ? (
            <ClubMembersListUI memberType="Admin" members={club.Admins} />
          ) : (
            <MainText>No admins</MainText>
          )}
        </ElevatedBox>

        <ElevatedBox>
          {club.Members.length ? (
            <ClubMembersListUI memberType="Member" members={club.Members} />
          ) : (
            <MainText>No members</MainText>
          )}
        </ElevatedBox>
      </div>
    )
  }
}

///// Styled Components /////
export const MediaUIContainer = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 6px;
  margin: 6px;
  max-width: 220px;
  max-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
