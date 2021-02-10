import styled from 'styled-components'
import Link from 'next/link'
import { redirect } from 'next/dist/next-server/server/api-utils'
import React from 'react'
import { PlusIcon } from './images'

//// Global Themes Data ////
export const theme = {
  colors: {
    primaryDark: '#131313',
    pureBlack: '#000000',
    primaryLight: '#fafafa',
    pureWhite: '#ffffff',
    highlight: '#167974',
    destructive: '#bb2020',
  },
  spacing: {
    sideNavWidth: '80px',
  },
}

//// Text ////
interface TextProps {
  readonly bold?: boolean
  readonly colorType?: colorTypes
}

type colorTypes = 'primaryDark' | 'primaryLight' | 'highlight' | 'destructive'

export const Title = styled.h1<TextProps>`
  font-size: 28px;
  margin: 0px;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.primaryDark};
`

export const SubTitle = styled.h2<TextProps>`
  font-size: 22px;
  margin: 0px;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.primaryDark};
`

export const MainText = styled.span<TextProps>`
  font-size: 16px;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.primaryDark};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`

export const TinyText = styled.span<TextProps>`
  font-size: 10px;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.primaryDark};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`

//// Layout ////
/// Background for the individual page info.
export const MainContent = styled.div`
  background-color: ${(props) => props.theme.colors.primaryLight};
  border-radius: 24px;
  margin-left: ${(props) => props.theme.spacing.sideNavWidth};
  padding: 30px;
  width: calc(100% - 60px - ${(props) => props.theme.spacing.sideNavWidth});
  display: flex;
  align-items: center;
  flex-direction: column;
`

interface FlexProps {
  readonly direction?: string
  readonly justify?: string
  readonly align?: string
  readonly wrap?: string
}

export const FlexBox = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
  flex-grow: 1;
`

interface PaddingProps {
  readonly padding?: string
}

export const Padding = styled.div<PaddingProps>`
  padding: ${(props) => props.padding || '10px'};
`

interface SpacerProps {
  readonly space?: string
}

export const Spacer = styled.div<SpacerProps>`
  padding: ${(props) => props.space || '8px'};
`

interface SizedBoxProps {
  readonly width?: number
  readonly height?: number
}

export const SizedBox = styled.div<SizedBoxProps>`
  width: ${(props) => `${props.width}px` || '100%'};
  height: ${(props) => `${props.height}px` || '100%'};
`

export const ElevatedBox = styled.div<FlexProps>`
  box-shadow: 0px 8px 20px rgb(0 0 0 / 9%);
  border-radius: 6px;
  padding: 12px;
  margin: 6px;
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
`

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
  readonly colorType: colorTypes
  readonly padding?: string
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: ${(props) => props.padding || 0};
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
  * {
    color: ${(props) =>
      props.colorType === 'primaryLight'
        ? props.theme.colors.primaryDark
        : props.theme.colors.primaryLight};
  }
  :hover {
    cursor: pointer;
    * {
      opacity: 0.9;
    }
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
    padding="10px 14px"
  >
    <PlusIcon width={12} />
    <Spacer space="4px" />
    <MainText>Add New</MainText>
  </StyledButton>
)
