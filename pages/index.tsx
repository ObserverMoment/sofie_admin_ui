import React from 'react'
import { Page } from '../components/layout/page'
import { ElevatedBox, FlexBox, Title } from '../components/styled'

export default function Home() {
  return (
    <Page navItems={[]}>
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
    </Page>
  )
}
