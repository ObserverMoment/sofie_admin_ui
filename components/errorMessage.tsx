import React from 'react'
import { ErrorIcon } from './images'
import {
  ElevatedBox,
  FlexBox,
  MainText,
  Spacer,
} from './styled-components/styled'

const ErrorMessage = ({ message }: { message: string }) => (
  <ElevatedBox direction="row" justify="center">
    <FlexBox>
      <Spacer bottom="16px" />
      <MainText colorType="destructive" textAlign="center">
        {message}
      </MainText>
      <Spacer bottom="8px" />
      <MainText colorType="destructive" textAlign="center">
        You can contact us on slack [group] or at [email] for assistance.
      </MainText>
    </FlexBox>
  </ElevatedBox>
)

export default ErrorMessage
