import React from 'react'
import styled from 'styled-components'
import equal from 'deep-equal'
import { MainText } from '../../../styles/text'
import { FlexBox } from '../../../styles/layout'

interface CheckBoxesProps<T> {
  direction?: 'row' | 'column'
  options: Array<CheckboxOption<T>>
  selected: Array<T>
  setValue: (updatedArray: Array<T>) => void
}

interface CheckboxOption<T> {
  value: T
  label: string
}

interface StyledCheckboxProps {
  isSelected: boolean
}

const StyledCheckboxButton = styled.button<StyledCheckboxProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 6px;
  align-items: center;
  padding: 12px;
  outline: none;
  border-radius: 8px;
  opacity: ${(p) => (p.isSelected ? 1 : 0.4)};
  border: 1px solid ${(p) => p.theme.colors.primaryDark};
  background-color: ${(p) =>
    p.isSelected ? p.theme.colors.primaryDark : p.theme.colors.primaryLight};
  transition: all ease 0.3s;
  :hover {
    cursor: pointer;
  }
  * {
    color: ${(p) =>
      p.isSelected ? p.theme.colors.pureWhite : p.theme.colors.primaryDark};
  }
`

const CheckBox = ({ isSelected, label, onClick }) => (
  <StyledCheckboxButton
    type="button"
    onClick={onClick}
    isSelected={isSelected}
    aria-label={label}
  >
    <MainText fontSize="12px">{label}</MainText>
  </StyledCheckboxButton>
)

function CheckBoxes<T>({
  direction = 'row',
  options = [],
  selected,
  setValue,
}: CheckBoxesProps<T>) {
  function isSelected(v: T) {
    return selected.some((s) => equal(s, v))
  }

  function updateSelected(v: T) {
    if (isSelected(v)) {
      // Remove it
      setValue(selected.filter((s) => !equal(s, v)))
    } else {
      // Add it
      setValue([v, ...selected])
    }
  }

  return (
    <FlexBox direction={direction} justify="start" align="center">
      {options.map((o) => (
        <CheckBox
          key={o.label}
          isSelected={isSelected(o.value)}
          label={o.label}
          onClick={() => updateSelected(o.value)}
        />
      ))}
    </FlexBox>
  )
}

export default CheckBoxes
