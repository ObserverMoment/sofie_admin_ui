import React from 'react'
import { FlexBox, Padding, Title } from '../components/styled-components/styled'

export default function Home() {
  return (
    <Padding padding="50px">
      <FlexBox align="center">
        <Title colorType="grey">Dashboard</Title>
      </FlexBox>
    </Padding>
  )
}
