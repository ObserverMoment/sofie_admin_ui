import { gql, useQuery } from '@apollo/client'
import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'

export const BODYAREAS_QUERY = gql`
  query bodyAreas {
    bodyAreas {
      id
      name
      altNames
      frontBack
      upperLower
    }
  }
`

export default function BodyAreas() {
  const { loading, error, data } = useQuery(BODYAREAS_QUERY)

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
            Header: 'Alternative Names',
            accessor: 'altNames', // accessor is the "key" in the data
            disableSortBy: true,
          },
          {
            Header: 'Front / Back',
            accessor: 'frontBack', // accessor is the "key" in the data
            disableSortBy: true,
          },
          {
            Header: 'Upper / Core / Lower',
            accessor: 'upperLower', // accessor is the "key" in the data
            disableSortBy: true,
          },
        ]}
        data={data.bodyAreas}
      />
    )
  }
}
