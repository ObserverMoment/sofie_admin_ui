import styled from 'styled-components'

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
  font-size: 50px;
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
