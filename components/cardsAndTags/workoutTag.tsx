import { ReactNode } from 'react'
import { MainText, Padding } from '../styled-components/styled'
import { Tag } from '../styled-components/tags'

interface WorkoutTagProps {
  tag: string
  backgroundColor?: string // Hex
  textColor?: string // Hex
  icon?: ReactNode
}

export const WorkoutTag = ({
  tag,
  backgroundColor,
  textColor,
  icon,
}: WorkoutTagProps) => (
  <Tag
    hoverCursor={true}
    margin="4px 0"
    backgroundColor={backgroundColor}
    textColor={textColor}
  >
    {!!icon && <Padding padding="0 4px 0 0 ">{icon}</Padding>}
    <MainText>{tag}</MainText>
  </Tag>
)
