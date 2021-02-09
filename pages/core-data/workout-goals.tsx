import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { FlexBox, Title } from '../../components/styled'

export const WORKOUT_GOALS_QUERY = gql`
  query workoutGoals {
    workoutGoals {
      id
      name
    }
  }
`

export default function WorkoutGoals() {
  const { loading, error, data } = useQuery(WORKOUT_GOALS_QUERY)
  console.log(data)

  return (
    <FlexBox>
      <Title>Workout Goals: </Title>
      {data && data.workoutGoals.map((wg) => <div key={wg.id}>{wg.name}</div>)}
    </FlexBox>
  )
}
