import React from 'react'
import { FlexBox, Padding } from '../styles/layout'
import { Title } from '../styles/text'

export default function Dashboard() {
  return (
    <Padding padding="50px">
      <FlexBox align="center">
        <Title colorType="grey">Dashboard</Title>
      </FlexBox>
    </Padding>
  )
}
