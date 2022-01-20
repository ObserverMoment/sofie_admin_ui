import React, { useState } from 'react'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { showToast } from '../../components/notifications'
import { SummaryCard } from '../../components/styled-components/cards'
import {
  FlexBox,
  MainText,
  Title,
} from '../../components/styled-components/styled'
import {
  usePublicWorkoutsQuery,
  WorkoutSummary,
} from '../../graphql/generated_types'

export default function Workouts() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Workout',
  })

  const { loading, error, data } = usePublicWorkoutsQuery()

  const [activeWorkoutData, setActiveWorkoutData] = useState(null)

  function handleCardClick(data: WorkoutSummary) {
    setActiveWorkoutData(data)
    setModalState({ isOpen: true, title: 'Workout' })
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
        {data.publicWorkouts.map((w: WorkoutSummary) => (
          <WorkoutSummaryCard
            workoutSummary={w}
            handleCardClick={handleCardClick}
          />
        ))}
      </FlexBox>
    )
  }
}

interface WorkoutSummaryCardProps {
  workoutSummary: WorkoutSummary
  handleCardClick: (workoutSummary: WorkoutSummary) => void
}

export const WorkoutSummaryCard = ({
  workoutSummary,
  handleCardClick,
}: WorkoutSummaryCardProps) => (
  <SummaryCard
    maxWidth="300px"
    margin="10px"
    onClick={() => handleCardClick(workoutSummary)}
  >
    <FlexBox>
      <Title>{workoutSummary.name}</Title>
      <MainText>{workoutSummary.description}</MainText>
      {workoutSummary.coverImageUri && (
        <FlexBox align="center">
          <img
            style={{ borderRadius: '20px' }}
            height="100px"
            src={`https://ucarecdn.com/${workoutSummary.coverImageUri}/`}
          />
        </FlexBox>
      )}
    </FlexBox>
  </SummaryCard>
)
