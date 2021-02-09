import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { FlexBox, Title } from '../../components/styled'

export const BODYAREAS_QUERY = gql`
  query equipments {
    bodyAreas {
      id
      name
    }
  }
`

export default function BodyAreas() {
  const { loading, error, data } = useQuery(BODYAREAS_QUERY)
  console.log(data)

  return (
    <FlexBox>
      <Title>Body Areas: </Title>
      {data && data.bodyAreas.map((ba) => <div key={ba.id}>{ba.name}</div>)}
    </FlexBox>
  )
}
