import React, { useRef, PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { CloseWindowIcon } from '../images'
import { motion, AnimatePresence } from 'framer-motion'
import { useOnClickOutside } from '../../lib/utils'
import { HighlightButton } from '../styled-components/buttons'
import { MainText } from '../styled-components/styled'

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
`

interface ModalContainerProps {
  width: string
}

// https://css-tricks.com/almanac/properties/b/box-shadow/
export const ModalContainer = styled(motion.div)<ModalContainerProps>`
  background-color: white;
  position: absolute; // ----.
  top: 50%; //     |positioning the container
  left: 50%; //     |in the middle
  border-radius: 5px;
  padding: 20px;
  max-height: 90vh;
  max-width: 90vw;
  width: ${(p) => p.width};
  overflow: auto;
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

interface ModalProps {
  handleClose?: () => void
  isOpen: boolean
  disableClickOutsideClose?: boolean
  disableCloseButton?: boolean
  width: string
  closeOnDone?: boolean // Displays 'Done' button rather than exit button to indicate changes are saved.
}

const Modal = ({
  handleClose,
  children,
  isOpen,
  disableClickOutsideClose = false,
  // Useful if you want to handle closing the modal from the children instead.
  // I.e in the case of forms - you may want to warn user that changes have not been saved.
  disableCloseButton = false,
  width = 'auto',
  closeOnDone = false,
}: PropsWithChildren<ModalProps>) => {
  const ref = useRef()
  useOnClickOutside(ref, () => {
    isOpen && handleClose && !disableClickOutsideClose
      ? handleClose()
      : () => {}
  })

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer variants={containerVariant} ref={ref} width={width}>
            {!disableCloseButton && (
              <CloseButton>
                {closeOnDone ? (
                  <HighlightButton onClick={handleClose}>
                    <MainText bold>Done</MainText>
                  </HighlightButton>
                ) : (
                  <div onClick={handleClose}>
                    <CloseWindowIcon />
                  </div>
                )}
              </CloseButton>
            )}
            {children}
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>,

    document.getElementById('__next'),
  )
}

export default Modal
