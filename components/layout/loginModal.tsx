import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import LoginForm from './loginForm'

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`
const ModalContainer = styled(motion.div)`
  position: absolute; // ----.
  top: 50%; //     |positioning the container
  left: 50%; //     |in the middle
  transform: translate(-50%, -50%); //  ----.
`

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
}
const containerVariant = {
  initial: { opacity: 0, transition: { type: 'spring' } },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
}

const LoginModal = ({ children, isOpen }) => {
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
