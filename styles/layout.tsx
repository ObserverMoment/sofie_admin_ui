import styled from 'styled-components'

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
