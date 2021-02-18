import React from 'react'
import { AnimatePresence } from 'framer-motion'
import LoginForm from './loginForm'
import {
  containerVariant,
  ModalContainer,
  modalVariant,
  Overlay,
} from './modal'

const LoginModal = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer variants={containerVariant}>
            <LoginForm />
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  )
}

export default LoginModal
