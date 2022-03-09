import React from 'react'
import { FlexBox, Title } from '../../components/styled-components/styled'
import { useCoreDataQuery } from '../../graphql/generated_types'

export default function Overview() {
  const { loading, error, data } = useCoreDataQuery()
  console.log(data?.coreData)
  return (
    <FlexBox align="center">
      <Title colorType="grey">Overview</Title>
      <Title colorType="grey">Usage and Popularity Analytics</Title>
    </FlexBox>
  )
}
