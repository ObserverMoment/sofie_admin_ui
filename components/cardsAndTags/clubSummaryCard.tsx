import { PublicClubSummaryAdmin } from '../../graphql/generated_types'
import { SummaryCard } from '../styled-components/cards'
import { SubTitle } from '../styled-components/styled'

interface ClubSummaryCardProps {
  club: PublicClubSummaryAdmin
  handleCardClick: (club: PublicClubSummaryAdmin) => void
}

export const ClubSummaryCard = ({
  club,
  handleCardClick,
}: ClubSummaryCardProps) => (
  <SummaryCard
    hoverCursor={true}
    margin="10px"
    onClick={() => handleCardClick(club)}
  >
    <SubTitle>{club.name}</SubTitle>
  </SummaryCard>
)
