import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { PlusIcon } from '../images'
import { ColorTypes, MainText, Spacer } from './styled'

//// Buttons ////
const StyledAnchor = styled.a`
  padding: 0;
  margin: 0;
  opacity: 1;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const MyLink = ({ href, content }) => (
  <Link href={href}>
    <StyledAnchor>{content}</StyledAnchor>
  </Link>
)

interface StyledButtonProps {
  readonly flexDirection?: string
  readonly colorType: ColorTypes
  readonly padding?: string
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${(props) => props.padding || '10px 16px'};
  margin: 0;
  border: none;
  opacity: 1;
  border-radius: 100px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: center;
  align-items: center;
  outline: none;
  background-color: ${(props) => props.theme.colors[props.colorType]};
  color: ${(props) =>
    props.colorType === 'primaryLight'
      ? props.theme.colors.primaryDark
      : props.theme.colors.primaryLight};
  * {
    color: ${(props) =>
      props.colorType === 'primaryLight'
        ? props.theme.colors.primaryDark
        : props.theme.colors.primaryLight};
  }

  :hover {
    cursor: pointer;
  }
`

export const MyButton = ({
  flexDirection = 'row',
  onClick,
  children,
  colorType,
}) => (
  <StyledButton
    colorType={colorType}
    flexDirection={flexDirection}
    onClick={onClick}
    type="button"
  >
    {children}
  </StyledButton>
)

// Dark BG, Light Text
export const DarkButton = ({ flexDirection = 'row', onClick, children }) => (
  <MyButton
    flexDirection={flexDirection}
    onClick={onClick}
    children={children}
    colorType="primaryDark"
  />
)

// Light BG Dark Text
export const LightButton = ({ flexDirection = 'row', onClick, children }) => (
  <MyButton
    flexDirection={flexDirection}
    onClick={onClick}
    children={children}
    colorType="primaryLight"
  />
)

// Highlight BG Light Text
export const HighlightButton = ({
  flexDirection = 'row',
  onClick,
  children,
}) => (
  <MyButton
    flexDirection={flexDirection}
    onClick={onClick}
    children={children}
    colorType="highlight"
  />
)

// Red BG Light Text
export const DestructiveButton = ({
  flexDirection = 'row',
  onClick,
  children,
}) => (
  <MyButton
    flexDirection={flexDirection}
    onClick={onClick}
    children={children}
    colorType="destructive"
  />
)

export const CreateButton = ({ flexDirection = 'row', onClick }) => (
  <StyledButton
    colorType={'highlight'}
    flexDirection={flexDirection}
    onClick={onClick}
    padding="10px 18px"
  >
    <PlusIcon width={12} />
    <Spacer right="8px" />
    <MainText colorType="primaryLight">Add New</MainText>
  </StyledButton>
)
