import { gql, useQuery } from '@apollo/client'
import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'

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

  if (error) {
    return <ErrorMessage message={error.message} />
  } else if (loading) {
    return <LoadingSpinner />
  } else {
    return (
      <InteractiveTable
        columnMapping={[
          {
            Header: 'Name',
            accessor: 'name', // accessor is the "key" in the data
          },
        ]}
        data={data.workoutGoals}
      />
    )
  }
}
