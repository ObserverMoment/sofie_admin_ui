import React from 'react'
import styled from 'styled-components'
import { FlexBox, MainText, Spacer } from '../../styled-components/styled'
import equal from 'deep-equal'

interface RadioButtonsProps<T> {
  direction?: 'row' | 'column'
  options: Array<RadioButtonOption<T>>
  value: T
  setter: (v: T) => void
}

interface RadioButtonOption<T> {
  value: T
  label: string
}

interface StyledRadioButtonProps {
  isSelected: boolean
}

const StyledRadioButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 6px;
  align-items: center;
`

const StyledRadioButton = styled.button<StyledRadioButtonProps>`
  background-color: ${(p) => (p.isSelected ? 'red' : 'blue')};
  padding: 12px;
  outline: none;
  border-radius: 50%;
  opacity: ${(p) => (p.isSelected ? 1 : 0.4)};
  border: 1px solid ${(p) => p.theme.colors.primaryDark};
  background-color: ${(p) =>
    p.isSelected ? p.theme.colors.primaryDark : p.theme.colors.primaryLight};
  transition: all ease 0.2s;
  :hover {
    cursor: pointer;
  }
`

const RadioButton = ({ isSelected, label, onClick }) => (
  <StyledRadioButtonContainer>
    <StyledRadioButton
      type="button"
      onClick={onClick}
      isSelected={isSelected}
      aria-label={label}
    />
    <Spacer space="4px" />
    <MainText>{label}</MainText>
  </StyledRadioButtonContainer>
)

function RadioButtons<T>({
  direction = 'row',
  options = [],
  value,
  setter,
}: RadioButtonsProps<T>) {
  return (
    <FlexBox direction={direction} justify="start" align="center">
      {options.map((o) => (
        <RadioButton
          key={o.label}
          isSelected={equal(o.value, value)}
          label={o.label}
          onClick={() => setter(o.value)}
        />
      ))}
    </FlexBox>
  )
}

export default RadioButtons
