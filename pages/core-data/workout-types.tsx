import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { useCoreDataQuery } from '../../graphql/generated_types'

export default function WorkoutTypes() {
  const { loading, error, data } = useCoreDataQuery()

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
            id: 'validRepTypes', // accessor is the "key" in the data
            Header: 'Rep Types',
            accessor: ({ validRepTypes }) => validRepTypes.join(', '),
            disableSortBy: true,
          },
          {
            id: 'imageUri',
            Header: 'Has Image?',
            accessor: ({ imageUri }) => (imageUri ? 'YES' : 'NO'),
            disableSortBy: true,
          },
        ]}
        data={data.coreData.workoutSectionTypes}
      />
    )
  }
}
