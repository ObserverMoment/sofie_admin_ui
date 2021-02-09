import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../styled'
import { Footer } from './footer'
import { Header } from './header'
import { LeftNav } from './leftNav'

export const PageContainer = styled.div`
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  width: 100%;
`

export const PageContent = styled.div`
  padding: 10px;
  width: 100%;
`

export const Page = ({ children, navItems }) => (
  <PageContainer>
    <FlexBox direction="row">
      {navItems && navItems.length > 0 && <LeftNav navItems={navItems} />}
      <PageContent>{children}</PageContent>
    </FlexBox>
  </PageContainer>
)
