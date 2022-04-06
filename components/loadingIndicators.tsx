import React from 'react'
import { TailSpin, ThreeDots } from 'react-loading-icons'
import { FlexBox, Padding } from '../styles/layout'

export const LoadingSpinner = ({ size = 40 }) => (
  <FlexBox justify="center" align="center" width="100%" height="100%">
    <Padding padding="32px">
      <TailSpin height={size} width={size} stroke="#666666" />
    </Padding>
  </FlexBox>
)

export const LoadingDots = ({ size = 40 }) => (
  <FlexBox justify="center" align="center" width="100%" height="100%">
    <Padding padding="8px">
      <ThreeDots height={size} width={size} stroke="#353535" fill="#353535" />
    </Padding>
  </FlexBox>
)
