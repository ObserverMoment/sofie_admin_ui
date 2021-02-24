import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import { SummaryCard } from '../../components/styled-components/cards'
import {
  FlexBox,
  MainText,
  Title,
} from '../../components/styled-components/styled'
import { OFFICIAL_WORKOUTS_QUERY } from '../../graphql/workout'
import { Workout } from '../../types/models/workout'

export default function Workouts() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Workout',
  })

  const { loading, error, data } = useQuery(OFFICIAL_WORKOUTS_QUERY)

  const [activeWorkoutData, setActiveWorkoutData] = useState(null)

  function handleCardClick(data: Workout) {
    setActiveWorkoutData(data)
    setModalState({ isOpen: true, title: 'Workout' })
  }

  function handleAddNewClick() {
    setActiveWorkoutData(null)
    setModalState({ isOpen: true, title: 'Create Workout' })
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
        {data.officialWorkouts.map((w: Workout) => (
          <WorkoutSummaryCard workout={w} handleCardClick={handleCardClick} />
        ))}
      </FlexBox>
    )
  }
}

interface WorkoutSummaryCardProps {
  workout: Workout
  handleCardClick: (workout: Workout) => void
}

export const WorkoutSummaryCard = ({
  workout,
  handleCardClick,
}: WorkoutSummaryCardProps) => (
  <SummaryCard
    maxWidth="300px"
    margin="10px"
    onClick={() => handleCardClick(workout)}
  >
    <FlexBox>
      <Title>{workout.name}</Title>
      <MainText>{workout.description}</MainText>
      {workout.imageUrl && (
        <FlexBox align="center">
          <img
            style={{ borderRadius: '20px' }}
            height="100px"
            src={`https://ucarecdn.com/${workout.imageUrl}/`}
          />
        </FlexBox>
      )}
    </FlexBox>
  </SummaryCard>
)
