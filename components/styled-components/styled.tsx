import styled from 'styled-components'

//// Global Themes Data ////
export const theme = {
  colors: {
    primaryDark: '#131313',
    pureBlack: '#000000',
    primaryLight: '#fafafa',
    pureWhite: '#ffffff',
    grey: '#868686',
    highlight: '#167974',
    destructive: '#bb2020',
    info: '#054894',
    success: '#167974',
  },
  spacing: {
    sideNavWidth: '80px',
  },
}

//// Text ////
export type ColorTypes =
  | 'primaryDark'
  | 'primaryLight'
  | 'highlight'
  | 'destructive'
  | 'grey'

interface TextProps {
  readonly bold?: boolean
  readonly colorType?: ColorTypes
}

export const Title = styled.h1<TextProps>`
  font-size: 26px;
  margin: 0px;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.primaryDark};
`

export const SubTitle = styled.h2<TextProps>`
  font-size: 20px;
  margin: 0px;
  color: ${(props) =>
    props.colorType
      ? props.theme.colors[props.colorType]
      : props.theme.colors.primaryDark};
`

export const MainText = styled.span<TextProps>`
  font-size: 15px;
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
  align-items: center;
  flex-direction: column;
`

interface FlexProps {
  readonly direction?: string
  readonly justify?: string
  readonly align?: string
  readonly wrap?: string
  readonly width?: string
  readonly height?: string
  readonly padding?: string
}

export const FlexBox = styled.div<FlexProps>`
  padding: ${(props) => props.padding || 0};
  display: flex;
  flex-direction: ${(props) => props.direction || 'column'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'no-wrap'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  flex-grow: 1;
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
