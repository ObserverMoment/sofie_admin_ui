import React from 'react'
import { toast } from 'react-toastify'
import { ErrorIcon, InfoIcon, SuccessIcon } from './images'
import { FlexBox, MainText, Spacer } from './styled-components/styled'

type ToastIcon = 'Success' | 'Info' | 'Error'
const toastIcons = {
  Success: SuccessIcon,
  Info: InfoIcon,
  Error: ErrorIcon,
}

const ToastComponent = ({ message, icon: Icon }) => (
  <FlexBox direction="row" justify="space-evenly" align="center">
    <MainText bold>{message}</MainText>
    <Spacer space="4px" />
    <Icon />
  </FlexBox>
)

export const showToast = (message: string, iconType: ToastIcon = 'Info') =>
  toast(<ToastComponent message={message} icon={toastIcons[iconType]} />, {
    hideProgressBar: true,
    autoClose: 2000,
    style: {
      fontFamily: "'Nunito Sans',sans-serif",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
