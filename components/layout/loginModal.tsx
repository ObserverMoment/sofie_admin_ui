import React from 'react'
import { AnimatePresence } from 'framer-motion'
import LoginForm from '../forms/loginForm'
import {
  containerVariant,
  ModalContainer,
  modalVariant,
  ModalOverlay,
} from './modal'

const LoginModal = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer width="400px" variants={containerVariant}>
            <LoginForm />
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  )
}

export default LoginModal
