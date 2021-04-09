import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import { MyButton } from '../components/styled-components/buttons'
import {
  FlexBox,
  MainText,
  Padding,
  Spacer,
  Title,
} from '../components/styled-components/styled'

// https://codesandbox.io/s/github/metamodal/blog/tree/master/control-a-dialog-box-asynchronously-using-react-hooks/example/final?file=/src/ConfirmationDialog.jsx

export const DialogOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 998;
`

// https://css-tricks.com/almanac/properties/b/box-shadow/
export const DialogContainer = styled(motion.div)`
  background-color: white;
  position: absolute; // ----.
  top: 50%; //     |positioning the container
  left: 50%; //     |in the middle
  border-radius: 5px;
  padding: 20px;
  transform: translate(-50%, -50%);
  width: 500px;
  overflow: auto;
  z-index: 999;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`
// Animation stages.
export const dialogVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
}
// Animation stages.
export const containerVariant = {
  initial: {
    x: '-50%',
    y: '-55%',
    opacity: 0,
    transition: { type: 'spring', duration: 1.5 },
  },
  isOpen: { x: '-50%', y: '-50%', opacity: 1 },
  exit: { x: '-50%', y: '-53%', opacity: 0 },
}

interface ConfirmationDialogProps {
  open: boolean
  title: string
  message?: string
  onConfirm: () => void
  onDismiss: () => void
}

export const ConfirmationDialog = ({
  open,
  title,
  message,
  onConfirm,
  onDismiss,
}: ConfirmationDialogProps) => {
  return (
    <AnimatePresence>
      {open && (
        <DialogOverlay>
          <DialogContainer>
            <FlexBox direction="column" align="center">
              <Title>{title}</Title>
              {message && <MainText>{message}</MainText>}
              <FlexBox direction="row" padding="16px 0 0 0">
                <MyButton onClick={onConfirm} colorType="primaryLight">
                  <MainText bold>Confirm</MainText>
                </MyButton>
                <Spacer right="16px" />
                <MyButton onClick={onDismiss} colorType="primaryLight">
                  <MainText bold>Cancel</MainText>
                </MyButton>
              </FlexBox>
            </FlexBox>
          </DialogContainer>
        </DialogOverlay>
      )}
    </AnimatePresence>
  )
}

const ConfirmationDialogContext = React.createContext<{
  openDialog?: (config: ConfirmationDialogConfig) => void
}>({})

interface ConfirmationDialogConfig {
  title: string
  message?: string
  onConfirm: () => void
}

export const ConfirmationDialogProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const emptyConfig: ConfirmationDialogConfig = {
    title: '',
    message: null,
    onConfirm: () => {},
  }
  const [config, setConfig] = useState<ConfirmationDialogConfig>(emptyConfig)

  // This function is passed via Provider and accessed via the Hook.
  const openDialog = (config: ConfirmationDialogConfig) => {
    setConfig(config)
    setOpen(true)
  }

  const handleConfirm = () => {
    config.onConfirm()
    reset()
  }

  const handleCancel = () => {
    reset()
  }

  const reset = () => {
    setOpen(false)
    setConfig(emptyConfig)
  }

  return (
    <ConfirmationDialogContext.Provider value={{ openDialog }}>
      <ConfirmationDialog
        open={open}
        title={config.title}
        message={config?.message}
        onConfirm={handleConfirm}
        onDismiss={handleCancel}
      />
      {children}
    </ConfirmationDialogContext.Provider>
  )
}

export const useConfirmationDialog = () => {
  const { openDialog } = React.useContext(ConfirmationDialogContext)

  const getConfirmation = (config: ConfirmationDialogConfig) => {
    openDialog(config)
  }

  return getConfirmation
}
