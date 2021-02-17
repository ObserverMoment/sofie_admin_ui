import { useQuery } from '@apollo/client'
import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { WORKOUT_TYPES_QUERY } from '../../graphql/coreData'

export default function WorkoutTypes() {
  const { loading, error, data } = useQuery(WORKOUT_TYPES_QUERY)

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
            accessor: 'name',
            disableSortBy: true,
          },
          {
            Header: 'Short Description',
            accessor: 'subtitle',
            disableSortBy: true,
          },
          {
            Header: 'Long Description',
            accessor: 'description',
            disableSortBy: true,
          },
          {
            Header: 'Score As',
            accessor: 'scoreType',
            disableSortBy: true,
          },
        ]}
        data={data.workoutTypes}
      />
    )
  }
}
