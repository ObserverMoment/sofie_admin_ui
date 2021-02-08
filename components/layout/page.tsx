import React from 'react'
import styled from 'styled-components'
import { FlexBox, Spacer } from '../styled'
import { Footer } from './footer'
import { Header } from './header'
import { LeftNav } from './leftNav'

export const PageContainer = styled.div`
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  padding: 10px;
`

export const Page = (props) => (
  <div>
    <Header />
    <PageContainer>
      <FlexBox direction="row">
        <LeftNav />
        <Spacer />
        <div>{props.children}</div>
      </FlexBox>
    </PageContainer>
    <Footer />
  </div>
)
