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
    <Icon width={20} />
    <Spacer space="4px" />
    <MainText>{message}</MainText>
  </FlexBox>
)

export const showToast = (
  message: string,
  iconType: ToastIcon = 'Info',
  closeAfter?: number,
) =>
  toast(<ToastComponent message={message} icon={toastIcons[iconType]} />, {
    hideProgressBar: true,
    autoClose: closeAfter || 2000,
    style: {
      fontFamily: "'Nunito Sans',sans-serif",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
