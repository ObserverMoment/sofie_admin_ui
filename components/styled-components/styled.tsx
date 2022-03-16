import styled from 'styled-components'

//// Global Themes Data ////
export const theme = {
  colors: {
    primaryDark: '#1a1a1a',
    pureBlack: '#000000',
    primaryLight: '#f3f3f3',
    pureWhite: '#ffffff',
    headingGrey: '#3b3b3b',
    grey: '#3b3b3b',
    lightGrey: '#9e9e9e',
    highlight: '#069b8e',
    destructive: '#bb2020',
    info: '#054894',
    success: '#167974',
  },
  spacing: {
    sideNavWidth: '140px',
  },
}

//// Text ////
export type ColorTypes =
  | 'primaryDark'
  | 'pureBlack'
  | 'primaryLight'
  | 'pureWhite'
  | 'grey'
  | 'lightGrey'
  | 'highlight'
  | 'destructive'
  | 'info'
  | 'success'

interface TextProps {
  readonly bold?: boolean
  readonly textAlign?:
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'initial'
    | 'inherit'
  readonly colorType?: ColorTypes
  readonly fontSize?: string
}

export const Title = styled.h1<TextProps>`
  font-size: ${(props) => props.fontSize || '22px'};
  font-weight: bold;
  margin: 0px;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.headingGrey};
`

export const SubTitle = styled.h2<TextProps>`
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: normal;
  margin: 0px;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.headingGrey};
`

export const MainText = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize || '15px'};
  text-align: ${(props) => props.textAlign || 'left'};
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.primaryDark};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`

export const TinyText = styled.span<TextProps>`
  font-size: 11px;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.primaryDark};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`

//// Layout ////
/// Background for the individual page info.
// Fixed height to 100vh and then scroll content.
export const PageContainer = styled.div`
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  flex-grow: 1;
`

export const MainContent = styled.div`
  border-radius: 24px;
  margin-left: ${(props) => props.theme.spacing.sideNavWidth};
  padding: 10px 20px;
  width: calc(100% - 60px - ${(props) => props.theme.spacing.sideNavWidth});
  display: flex;
  flex-direction: column;
`

interface FlexProps {
  readonly direction?: string
  readonly justify?: string
  readonly align?: string
  readonly wrap?: string
  readonly width?: string
  readonly height?: string
  readonly margin?: string
  readonly padding?: string
  readonly backgroundColor?: string
  readonly cursorHover?: boolean
  readonly borderRadius?: string
  readonly flexGrow?: number
  readonly boxShadow?: string
  readonly gap?: string
}

export const FlexBox = styled.div<FlexProps>`
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  flex-grow: ${(props) =>
    typeof props.flexGrow === 'number' ? props.flexGrow : 1};
  background-color: ${(props) => props.backgroundColor || 'inherit'};
  border-radius: ${(props) => props.borderRadius || '0px'};
  box-shadow: ${(props) => props.boxShadow || 'none'};
  gap: ${(props) => props.gap || 0};
  :hover {
    cursor: ${(props) => (props.cursorHover ? 'pointer' : 'default')};
  }
`

interface PaddingProps {
  readonly padding?: string
}

export const Padding = styled.div<PaddingProps>`
  padding: ${(props) => props.padding || '10px'};
`

interface SpacerProps {
  readonly top?: string
  readonly right?: string
  readonly bottom?: string
  readonly left?: string
}

export const Spacer = styled.div<SpacerProps>`
  padding-top: ${(props) => props.top || 0};
  padding-right: ${(props) => props.right || 0};
  padding-bottom: ${(props) => props.bottom || 0};
  padding-left: ${(props) => props.left || 0};
`

interface SizedBoxProps {
  readonly width?: number
  readonly height?: number
}

export const SizedBox = styled.div<SizedBoxProps>`
  width: ${(props) => (props.width ? `${props.width}px` : 'inherit')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
`

interface MaxSizedBoxProps {
  readonly maxWidth?: number
  readonly maxHeight?: number
}

export const MaxSizedBox = styled.div<MaxSizedBoxProps>`
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : 'none')};
  max-height: ${(props) => (props.maxHeight ? `${props.maxHeight}px` : 'none')};
`

export const ElevatedBox = styled.div<FlexProps>`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  padding: ${(props) => (props.padding ? `${props.padding}px` : '16px')};
  margin: 6px;
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'wrap'};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.pureWhite};
`
