import { useRouter } from 'next/router'
import Breadcrumbs from '../../components/breadcrumbs'
import { ClubSummaryCard } from '../../components/cardsAndTags/clubSummaryCard'
import { LoadingDots } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import {
  FlexBox,
  MainText,
  Padding,
} from '../../components/styled-components/styled'
import { PUBLIC_CONTENT_BASE_URL } from '../../constants'
import {
  PublicClubSummaryAdmin,
  PublicContentValidationStatus,
  useAdminPublicClubSummariesQuery,
} from '../../graphql/generated_types'

export default function PublicClubsValidated() {
  const router = useRouter()

  const { loading, error, data } = useAdminPublicClubSummariesQuery({
    variables: {
      status: PublicContentValidationStatus.Valid,
    },
  })

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingDots />
  } else {
    return (
      <FlexBox padding="6px 0">
        <Breadcrumbs
          pageTitle={`Validated Clubs (${data.adminPublicClubSummaries.length})`}
        />
        <FlexBox direction="row" wrap="wrap" padding="12px 0">
          {data.adminPublicClubSummaries.length ? (
            data.adminPublicClubSummaries.map((w) => (
              <ClubSummaryCard
                key={w.id}
                club={w as PublicClubSummaryAdmin}
                handleCardClick={() =>
                  router.push(`${PUBLIC_CONTENT_BASE_URL}/clubs/${w.id}`)
                }
              />
            ))
          ) : (
            <Padding>
              <MainText>None to display</MainText>
            </Padding>
          )}
        </FlexBox>
      </FlexBox>
    )
  }
}
