import React from 'react'
import styled from 'styled-components'
import Avatar from '../logo'
import { FlexBox, MainText, Spacer } from '../styled'

export const FixedHeader = styled.header`
  background-color: ${(props) => props.theme.colors.background};
  position: fixed;
  z-index: 1100;
  top: 0;
  left: 0;
  right: 0;
  padding-bottom: 1px;
  box-shadow: 0 0 15px 0 rgb(0 0 0 / 10%);
  transform: translateZ(100px);
  padding: 10px;
`

export const Header = (props) => (
  <FixedHeader>
    <FlexBox direction="row" align="center">
      <Avatar width={40} height={40} />
      <Spacer space="6px" />
      <MainText bold>SpotMe Fitness: Admin Dashboard</MainText>
    </FlexBox>
  </FixedHeader>
)
