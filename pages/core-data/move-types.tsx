import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { useMoveTypesQuery } from '../../graphql/generated_types'

export default function MoveTypes() {
  const { loading, error, data } = useMoveTypesQuery()

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
            Header: 'Description',
            accessor: 'description',
            disableSortBy: true,
          },
          {
            id: 'imageUri',
            Header: 'Has Image?',
            accessor: ({ imageUri }) => (imageUri ? 'YES' : 'NO'),
            disableSortBy: true,
          },
        ]}
        data={data.moveTypes}
      />
    )
  }
}
