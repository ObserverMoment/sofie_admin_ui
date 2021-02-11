import React from 'react'
import { ErrorIcon } from './images'
import {
  ElevatedBox,
  FlexBox,
  MainText,
  Spacer,
} from './styled-components/styled'

const ErrorMessage = ({ message }: { message: string }) => (
  <ElevatedBox direction="row" align="center">
    <ErrorIcon />
    <Spacer space="4px" />
    <FlexBox>
      <MainText bold colorType="destructive">
        {message}
      </MainText>
      <MainText bold colorType="destructive">
        You can contact us on slack [group] or at [email] for assistance.
      </MainText>
    </FlexBox>
  </ElevatedBox>
)

export default ErrorMessage
