import { useQuery } from '@apollo/client'
import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { WORKOUT_GOALS_QUERY } from '../../graphql/coreData'

export default function WorkoutGoals() {
  const { loading, error, data } = useQuery(WORKOUT_GOALS_QUERY)

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
