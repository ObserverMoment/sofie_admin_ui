import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { FlexBox, Title } from '../../components/styled'

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

  return (
    <FlexBox>
      <Title>Moves: </Title>
      {data &&
        data.standardMoves.map((move) => <div key={move.id}>{move.name}</div>)}
    </FlexBox>
  )
}
