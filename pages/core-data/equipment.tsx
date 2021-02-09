import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { FlexBox, Title } from '../../components/styled'

export const EQUIPMENT_QUERY = gql`
  query equipments {
    equipments {
      id
      name
    }
  }
`

export default function Moves() {
  const { loading, error, data } = useQuery(EQUIPMENT_QUERY)
  console.log(data)

  const basePath = '/core-data'

  return (
    <FlexBox>
      <Title>Equipment: </Title>
      {data && data.equipments.map((e) => <div key={e.id}>{e.name}</div>)}
    </FlexBox>
  )
}
