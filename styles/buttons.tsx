import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { ChevronIcon, PlusIcon } from '../components/icons'
import { FlexBox, Spacer } from './layout'
import { ColorTypes, MainText, SubTitle } from './text'

//// Buttons ////
const StyledAnchor = styled.a`
  padding: 0;
  margin: 0;
  text-decoration: none;
  :hover,
  *:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

export const MyLink = ({ href, content }) => (
  <Link key={href} href={href} passHref>
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
  border-radius: 4px;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: center;
  align-items: center;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
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
    <PlusIcon size="xs" />
    <Spacer right="8px" />
    <MainText colorType="primaryLight">Add New</MainText>
  </StyledButton>
)

export const BackButton = () => {
  const router = useRouter()

  return (
    <FlexBox
      direction="row"
      onClick={router.back}
      align="center"
      justify="center"
      flexGrow={0}
      cursorHover
    >
      <ChevronIcon size="1x" direction="left" />
      <Spacer right="4px" />
      <SubTitle>Back</SubTitle>
    </FlexBox>
  )
}
