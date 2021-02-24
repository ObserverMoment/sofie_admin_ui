import { gql, useQuery } from '@apollo/client'
import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'
import { MOVE_TYPES_QUERY } from '../../graphql/move'

export default function MoveTypes() {
  const { loading, error, data } = useQuery(MOVE_TYPES_QUERY)

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
            id: 'imageUrl',
            Header: 'Has Image?',
            accessor: ({ imageUrl }) => (imageUrl ? 'YES' : 'NO'),
            disableSortBy: true,
          },
        ]}
        data={data.moveTypes}
      />
    )
  }
}
