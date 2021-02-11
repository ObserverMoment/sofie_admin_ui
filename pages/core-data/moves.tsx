import { gql, useQuery } from '@apollo/client'
import React from 'react'
import ErrorMessage from '../../components/errorMessage'
import InteractiveTable from '../../components/interactiveTable'
import { LoadingSpinner } from '../../components/loadingIndicators'

export const STANDARD_MOVES_QUERY = gql`
  query standardMoves {
    standardMoves {
      id
      name
    }
  }
`

export default function Moves() {
  const { loading, error, data } = useQuery(STANDARD_MOVES_QUERY)
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
        data={data.standardMoves}
      />
    )
  }
}
