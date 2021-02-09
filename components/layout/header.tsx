import React from 'react'
import styled from 'styled-components'
import { SpotMeLogo, AdminAvatar } from '../images'
import { FlexBox, MainText, MyLink, SizedBox, Spacer } from '../styled'
import { HeaderNav } from './headerNav'

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
    <FlexBox direction="row" align="center" justify="space-between">
      <FlexBox direction="row" align="center">
        <MyLink
          href="/"
          content={<SpotMeLogo width={40} height={40} />}
        ></MyLink>
        <HeaderNav />
      </FlexBox>
      <FlexBox direction="row" align="center" justify="flex-end">
        <MainText>Admin</MainText>
        <Spacer space="10px" />
        <SizedBox height="30px" width="30px">
          <AdminAvatar />
        </SizedBox>
      </FlexBox>
    </FlexBox>
  </FixedHeader>
)
