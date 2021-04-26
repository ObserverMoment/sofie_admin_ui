import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { useWorkoutGoalsQuery } from '../../graphql/generated_types'

export default function WorkoutGoals() {
  const { loading, error, data } = useWorkoutGoalsQuery()

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
            disableSortBy: true,
          },
          {
            Header: 'Description',
            accessor: 'description', // accessor is the "key" in the data
            disableSortBy: true,
          },
        ]}
        data={data.workoutGoals}
      />
    )
  }
}
