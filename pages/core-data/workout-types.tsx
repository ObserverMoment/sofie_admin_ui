import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { FlexBox, Title } from '../../components/styled'

export const WORKOUT_TYPES_QUERY = gql`
  query workoutTypes {
    workoutTypes {
      id
      name
    }
  }
`

export default function WorkoutTypes() {
  const { loading, error, data } = useQuery(WORKOUT_TYPES_QUERY)
  console.log(data)

  return (
    <FlexBox>
      <Title>Workout Types: </Title>
      {data && data.workoutTypes.map((wt) => <div key={wt.id}>{wt.name}</div>)}
    </FlexBox>
  )
}
