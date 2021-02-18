import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { CloseWindowIcon } from '../images'
import { motion, AnimatePresence } from 'framer-motion'
import { useOnClickOutside } from '../../lib/utils'

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

// https://css-tricks.com/almanac/properties/b/box-shadow/
export const ModalContainer = styled(motion.div)`
  background-color: white;
  position: absolute; // ----.
  top: 50%; //     |positioning the container
  left: 50%; //     |in the middle
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`

const CloseButton = styled.div`
  top: 10px;
  right: 12px;
  position: absolute;
  cursor: pointer;
`

export const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
}

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

const Modal = ({ handleClose, children, isOpen }) => {
  const ref = useRef()
  useOnClickOutside(ref, () => {
    isOpen ? handleClose() : () => {}
  })

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer variants={containerVariant} ref={ref}>
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
