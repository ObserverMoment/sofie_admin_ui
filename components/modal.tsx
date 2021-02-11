import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { CloseWindowIcon } from './images'
import { FlexBox } from './styled-components/styled'
import { motion, AnimatePresence } from 'framer-motion'

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`
const ModalContainer = styled(motion.div)`
  background-color: white;
  position: absolute; // ----.
  top: 50%; //     |positioning the container
  left: 50%; //     |in the middle
  transform: translate(-50%, -50%); //  ----.
  border-radius: 12px;
  padding: 20px;
`

const CloseButton = styled.div`
  top: 10px;
  right: 12px;
  position: absolute;
  cursor: pointer;
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

const Modal = ({ handleClose, children, isOpen }) => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer variants={containerVariant}>
            <CloseButton onClick={handleClose}>
              <CloseWindowIcon />
            </CloseButton>

            {children}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>,

    document.getElementById('__next'),
  )
}

export default Modal
