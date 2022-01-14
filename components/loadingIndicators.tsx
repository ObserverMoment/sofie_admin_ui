import React from 'react'
import { TailSpin, ThreeDots } from 'react-loading-icons'
import { FlexBox, Padding } from './styled-components/styled'

export const LoadingSpinner = ({ height = 60, width = 60 }) => (
  <FlexBox justify="center" align="center" width="100%" height="100%">
    <Padding padding="40px">
      <TailSpin height={height} width={width} stroke="#353535" />
    </Padding>
  </FlexBox>
)

export const LoadingDots = ({ height = 60, width = 60 }) => (
  <FlexBox justify="center" align="center" width="100%" height="100%">
    <Padding padding="8px">
      <ThreeDots
        height={height}
        width={width}
        stroke="#353535"
        fill="#353535"
      />
    </Padding>
  </FlexBox>
)
