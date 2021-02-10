import React from 'react'
import Loader from 'react-loader-spinner'
import { FlexBox, Padding } from './styled'

const LoadingIndicator = () => (
  <FlexBox justify="center" align="center">
    <Padding padding="40px">
      <Loader
        type="Oval"
        color="rgba(45, 49, 92, 0.7)"
        height={60}
        width={60}
      />
    </Padding>
  </FlexBox>
)

export default LoadingIndicator
