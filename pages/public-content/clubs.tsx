import React, { useState } from 'react'
import { LoadingDots } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import { SummaryCard } from '../../components/styled-components/cards'
import {
  FlexBox,
  MainText,
  Title,
} from '../../components/styled-components/styled'
import {
  useAdminPublicClubsQuery,
  PublicContentValidationStatus,
  Club,
  ClubWithMetaDataAdmin,
} from '../../graphql/generated_types'

export default function Clubs() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Club',
  })

  const { loading, error, data } = useAdminPublicClubsQuery({
    variables: {
      status: PublicContentValidationStatus.Pending,
    },
  })

  const [activeClubData, setActiveClubData] = useState(null)

  function handleCardClick(data: ClubWithMetaDataAdmin) {
    setActiveClubData(data)
    setModalState({ isOpen: true, title: 'Club' })
  }

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingDots />
  } else {
    return (
      <FlexBox direction="row" justify="center" wrap="wrap">
        {data.adminPublicClubs.map((c) => (
          <ClubSummaryCard
            club={c as ClubWithMetaDataAdmin}
            handleCardClick={handleCardClick}
          />
        ))}
      </FlexBox>
    )
  }
}

interface ClubSummaryCardProps {
  club: ClubWithMetaDataAdmin
  handleCardClick: (club: ClubWithMetaDataAdmin) => void
}

export const ClubSummaryCard = ({
  club,
  handleCardClick,
}: ClubSummaryCardProps) => (
  <SummaryCard
    maxWidth="300px"
    margin="10px"
    onClick={() => handleCardClick(club)}
  >
    <FlexBox>
      <Title>{club.id}</Title>
      <MainText>{club.description}</MainText>
      {club.coverImageUri && (
        <FlexBox align="center">
          <img
            style={{ borderRadius: '20px' }}
            height="100px"
            src={`https://ucarecdn.com/${club.coverImageUri}/`}
          />
        </FlexBox>
      )}
    </FlexBox>
  </SummaryCard>
)
