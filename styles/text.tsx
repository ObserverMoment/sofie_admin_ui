import styled from 'styled-components'

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
