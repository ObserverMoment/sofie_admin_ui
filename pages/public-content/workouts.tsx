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
  PublicContentValidationStatus,
  useAdminPublicWorkoutsQuery,
  Workout,
  WorkoutWithMetaDataAdmin,
} from '../../graphql/generated_types'

export default function Workouts() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Workout',
  })

  const { loading, error, data } = useAdminPublicWorkoutsQuery({
    variables: {
      status: PublicContentValidationStatus.Pending,
    },
  })

  const [activeWorkoutData, setActiveWorkoutData] = useState(null)

  function handleCardClick(data: WorkoutWithMetaDataAdmin) {
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
        {data.adminPublicWorkouts.map((w) => (
          <WorkoutSummaryCard
            workout={w as WorkoutWithMetaDataAdmin}
            handleCardClick={handleCardClick}
          />
        ))}
      </FlexBox>
    )
  }
}

interface WorkoutSummaryCardProps {
  workout: WorkoutWithMetaDataAdmin
  handleCardClick: (workout: WorkoutWithMetaDataAdmin) => void
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
      {workout.coverImageUri && (
        <FlexBox align="center">
          <img
            style={{ borderRadius: '20px' }}
            height="100px"
            src={`https://ucarecdn.com/${workout.coverImageUri}/`}
          />
        </FlexBox>
      )}
    </FlexBox>
  </SummaryCard>
)
