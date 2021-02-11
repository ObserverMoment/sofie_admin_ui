import React from 'react'
import Loader from 'react-loader-spinner'
import { FlexBox, Padding } from './styled-components/styled'

export const LoadingSpinner = ({ height = 60, width = 60 }) => (
  <FlexBox justify="center" align="center">
    <Padding padding="40px">
      <Loader
        type="Oval"
        color="rgba(45, 49, 92, 0.7)"
        height={height}
        width={width}
      />
    </Padding>
  </FlexBox>
)

export const LoadingDots = ({ height = 60, width = 60 }) => (
  <FlexBox justify="center" align="center">
    <Padding padding="40px">
      <Loader
        type="ThreeDots"
        color="rgba(45, 49, 92, 0.7)"
        height={height}
        width={width}
      />
    </Padding>
  </FlexBox>
)
