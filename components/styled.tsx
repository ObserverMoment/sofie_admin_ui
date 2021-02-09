import styled from 'styled-components'
import Link from 'next/link'

//// Global Themes Data ////
export const theme = {
  colors: {
    primary: '#131313',
    highlight: '#167974',
    background: '#ffffff',
  },
}

//// Text ////
interface TextProps {
  readonly bold?: boolean
  readonly highlight?: boolean
}

export const Title = styled.h1<TextProps>`
  font-size: 30px;
  color: ${(props) =>
    props.highlight ? theme.colors.highlight : theme.colors.primary};
`

export const MainText = styled.span<TextProps>`
  font-size: 16px;
  color: ${(props) =>
    props.highlight ? theme.colors.highlight : theme.colors.primary};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`

//// Layout ////
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
  padding: ${(props) => props.space || '10px'};
`

interface SizedBoxProps {
  readonly width?: string
  readonly height?: string
}

export const SizedBox = styled.div<SizedBoxProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
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
export const MyLink = ({ href, content }) => (
  <Link href={href}>
    <a>{content}</a>
  </Link>
)
