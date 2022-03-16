import { useRouter } from 'next/router'
import styled from 'styled-components'
import { LoadingDots } from '../../../components/loadingIndicators'
import { showToast } from '../../../components/notifications'
import { BackButton } from '../../../components/styled-components/buttons'
import {
  ElevatedBox,
  FlexBox,
  MainText,
  MaxSizedBox,
  Padding,
  Spacer,
  SubTitle,
  Title,
} from '../../../components/styled-components/styled'
import {
  AdminPublicClubCountsDocument,
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
      /// Refetch the public club counts query.
      refetchQueries: [AdminPublicClubCountsDocument],
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

            {club.description && (
              <Padding padding="0 0 8px 0">
                <MaxSizedBox maxWidth={800}>
                  <MainText>{club.description}</MainText>
                </MaxSizedBox>
              </Padding>
            )}
          </div>
          <FlexBox direction="row" justify="flex-end" wrap="wrap">
            {club.introAudioUri ? (
              <UploadcareAudioPlayerWrapper uuid={club.introAudioUri} />
            ) : (
              <ElevatedBox>
                <MainText>No intro audio</MainText>
              </ElevatedBox>
            )}

            {club.introVideoUri ? (
              <UploadcareVideoPlayerWrapper
                uuid={club.introVideoUri}
                width="240px"
              />
            ) : (
              <ElevatedBox>
                <MainText>No intro video</MainText>{' '}
              </ElevatedBox>
            )}

            {club.coverImageUri ? (
              <MediaUIContainer>
                <UploadcareImageWrapper uuid={club.coverImageUri} />
              </MediaUIContainer>
            ) : (
              <ElevatedBox>
                <MainText>No cover image</MainText>
              </ElevatedBox>
            )}
          </FlexBox>
        </FlexBox>

        <ElevatedBox>
          <MainText>Admin Actions</MainText>
        </ElevatedBox>

        <ElevatedBox>
          <MainText>Club Info</MainText>
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
