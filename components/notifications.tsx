import React from 'react'
import { toast } from 'react-toastify'
import { MainText } from '../styles/text'
import { theme } from '../styles/theme'

type ToastType = 'Success' | 'Info' | 'Error'
const colors = {
  Success: theme.colors.success,
  Info: theme.colors.highlight,
  Error: theme.colors.destructive,
}

export const showToast = (
  message: string,
  type: ToastType = 'Info',
  closeAfter?: number,
) =>
  toast(<MainText colorType="primaryLight">{message}</MainText>, {
    hideProgressBar: true,
    autoClose: closeAfter || 2000,
    closeButton: false,
    style: {
      fontFamily: "'Nunito Sans',sans-serif",
      display: 'flex',
      alignItems: 'start',
      backgroundColor: colors[type],
      borderRadius: '10px',
    },
  })
