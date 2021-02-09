import React from 'react'
import { ElevatedBox, FlexBox, Title } from '../components/styled'

export default function Home() {
  return (
    <FlexBox>
      <Title>Home Page</Title>
      <FlexBox direction="row" justify="center">
        <ElevatedBox>
          <Title>Dash Box 1</Title>
        </ElevatedBox>
        <ElevatedBox>
          <Title>Dash Box 2</Title>
        </ElevatedBox>
        <ElevatedBox>
          <Title>Dash Box 3</Title>
        </ElevatedBox>
      </FlexBox>
    </FlexBox>
  )
}
