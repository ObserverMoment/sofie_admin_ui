import React from 'react'
import { Equipment } from '../../types/models'
import { FlexBox, MainText } from '../styled-components/styled'

interface EquipmentMultiSelectProps {
  selectedIds: Array<string>
  selectable: Array<Equipment>
}

const EquipmentMultiSelect = ({
  selectedIds,
  selectable,
}: EquipmentMultiSelectProps) => {
  return (
    <FlexBox direction="row">
      {selectable.map((e) => (
        <MainText>{e.name}</MainText>
      ))}
    </FlexBox>
  )
}
