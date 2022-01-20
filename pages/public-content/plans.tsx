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
import {
  usePublicWorkoutPlansQuery,
  WorkoutPlan,
  WorkoutPlanSummary,
} from '../../graphql/generated_types'

export default function WorkoutPlans() {
  const [{ isOpen, title }, setModalState] = useState({
    isOpen: false,
    title: 'Workout Plan',
  })

  const { loading, error, data } = usePublicWorkoutPlansQuery()

  const [activeWorkoutPlanData, setActiveWorkoutPlanData] = useState(null)

  function handleCardClick(data: WorkoutPlanSummary) {
    setActiveWorkoutPlanData(data)
    setModalState({ isOpen: true, title: 'Workout Plan' })
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
        {data.publicWorkoutPlans.map((wp: WorkoutPlanSummary) => (
          <WorkoutPlanSummaryCard
            workoutPlan={wp}
            handleCardClick={handleCardClick}
          />
        ))}
      </FlexBox>
    )
  }
}

interface WorkoutPlanSummaryCardProps {
  workoutPlan: WorkoutPlanSummary
  handleCardClick: (workoutPlan: WorkoutPlanSummary) => void
}

export const WorkoutPlanSummaryCard = ({
  workoutPlan,
  handleCardClick,
}: WorkoutPlanSummaryCardProps) => (
  <SummaryCard
    maxWidth="300px"
    margin="10px"
    onClick={() => handleCardClick(workoutPlan)}
  >
    <FlexBox>
      <Title>{workoutPlan.name}</Title>
      <MainText>{workoutPlan.description}</MainText>
      {workoutPlan.coverImageUri && (
        <FlexBox align="center">
          <img
            style={{ borderRadius: '20px' }}
            height="100px"
            src={`https://ucarecdn.com/${workoutPlan.coverImageUri}/`}
          />
        </FlexBox>
      )}
    </FlexBox>
  </SummaryCard>
)
