import React from 'react'
import styled from 'styled-components'
import { FlexBox, MainText, theme } from '../../styled-components/styled'
import equal from 'deep-equal'

interface RadioButtonsProps<T> {
  direction?: 'row' | 'column'
  options: Array<RadioButtonOption<T>>
  value: T
  setValue: (v: T) => void
}

interface RadioButtonOption<T> {
  value: T
  label: string
}

interface StyledRadioButtonProps {
  isSelected: boolean
  isFirst: boolean
  isLast: boolean
}

const StyledRadioButton = styled.button<StyledRadioButtonProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px;
  outline: none;
  border-radius: ${(p) =>
    p.isFirst ? '16px 0 0 16px' : p.isLast ? '0 16px 16px 0' : '0'};
  opacity: ${(p) => (p.isSelected ? 1 : 0.4)};
  border-top: 1px solid ${theme.colors.primaryDark};
  border-bottom: 1px solid ${theme.colors.primaryDark};
  border-left: 1px solid ${theme.colors.primaryDark};
  border-right: ${(p) =>
    p.isLast ? `1px solid ${theme.colors.primaryDark}` : 'none'};
  /* border: 1px solid ${(p) => p.theme.colors.primaryDark}; */
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

const RadioButton = ({ isSelected, isFirst, isLast, label, onClick }) => (
  <StyledRadioButton
    type="button"
    onClick={onClick}
    isSelected={isSelected}
    isFirst={isFirst}
    isLast={isLast}
    aria-label={label}
  >
    <MainText fontSize="12px">{label}</MainText>
  </StyledRadioButton>
)

function RadioButtons<T>({
  direction = 'row',
  options = [],
  value,
  setValue,
}: RadioButtonsProps<T>) {
  return (
    <FlexBox direction={direction} justify="start" align="center" wrap="wrap">
      {options.map((o, i) => (
        <RadioButton
          key={o.label}
          isSelected={equal(o.value, value)}
          isFirst={i === 0}
          isLast={i === options.length - 1}
          label={o.label}
          onClick={() => setValue(o.value)}
        />
      ))}
    </FlexBox>
  )
}

export default RadioButtons
