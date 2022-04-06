import { ReactNode } from 'react'
import { Padding } from '../../styles/layout'
import { Tag } from '../../styles/tags'
import { MainText } from '../../styles/text'

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
