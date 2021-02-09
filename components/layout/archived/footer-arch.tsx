import React from 'react'
import { SpotMeLogo } from '../../images'
import { FlexBox, MainText, Padding, Spacer } from '../../styled'

export const Footer = (props) => (
  <Padding>
    <FlexBox direction="row" justify="center" align="center">
      <SpotMeLogo width={20} height={20} />
      <Spacer />
      <MainText bold>SpotMe Fitness Ltd 2021</MainText>
    </FlexBox>
  </Padding>
)
