import styled from 'styled-components'

interface TagProps {
  margin?: string
  padding?: string
  hoverCursor?: boolean
  backgroundColor?: string
  textColor?: string
}

export const Tag = styled.span<TagProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 12px;
  border-radius: 30px;
  margin: ${(p) => p.margin || 'none'};
  padding: ${(p) => p.padding || '6px 12px'};
  color: ${(p) => p.textColor || 'inherit'};
  background-color: ${(p) => p.backgroundColor || p.theme.colors.pureWhite};
  :hover,
  *:hover {
    cursor: ${(p) => (p.hoverCursor ? 'pointer' : 'default')};
  }
`
