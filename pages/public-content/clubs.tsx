import React, { useState } from 'react'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import { SummaryCard } from '../../components/styled-components/cards'
import {
  FlexBox,
  MainText,
  Title,
} from '../../components/styled-components/styled'
import { usePublicClubsQuery, ClubSummary } from '../../graphql/generated_types'

export default function Clubs() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Club',
  })

  const { loading, error, data } = usePublicClubsQuery()

  const [activeClubData, setActiveClubData] = useState(null)

  function handleCardClick(data: ClubSummary) {
    setActiveClubData(data)
    setModalState({ isOpen: true, title: 'Club' })
  }

  if (error) {
    showToast(`Error retrieving data`, 'Error', 5000)
    console.error(error)
    return null
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <FlexBox direction="row" justify="center" wrap="wrap">
        {data.publicClubs.map((c: ClubSummary) => (
          <ClubSummaryCard clubSummary={c} handleCardClick={handleCardClick} />
        ))}
      </FlexBox>
    )
  }
}

interface ClubSummaryCardProps {
  clubSummary: ClubSummary
  handleCardClick: (workoutSummary: ClubSummary) => void
}

export const ClubSummaryCard = ({
  clubSummary,
  handleCardClick,
}: ClubSummaryCardProps) => (
  <SummaryCard
    maxWidth="300px"
    margin="10px"
    onClick={() => handleCardClick(clubSummary)}
  >
    <FlexBox>
      <Title>{clubSummary.name}</Title>
      <MainText>{clubSummary.description}</MainText>
      {clubSummary.coverImageUri && (
        <FlexBox align="center">
          <img
            style={{ borderRadius: '20px' }}
            height="100px"
            src={`https://ucarecdn.com/${clubSummary.coverImageUri}/`}
          />
        </FlexBox>
      )}
    </FlexBox>
  </SummaryCard>
)
