import styled from 'styled-components'
import Link from 'next/link'
import React from 'react'
import { FlexBox } from '../styled-components/styled'
import { LoadingDots } from '../loadingIndicators'

export const StyledForm = styled.form`
  padding: 16px 10px;
`

export const StyledInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 8px;
`

export const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`

export const HorizontalButtonsInputGroup = styled.div`
  display: flex;
  flex-direction: row;
`

export const RadioButton = ({
  name,
  value,
  label,
  register,
  height = null,
  width = null,
}) => (
  <RadioButtonContainer height={height} width={width}>
    <StyledRadioButton name={name} type="radio" value={value} ref={register} />
    <StyledRadioLabel htmlFor={value}>{label}</StyledRadioLabel>
  </RadioButtonContainer>
)

interface RadioButtonContainerProps {
  readonly height: string
  readonly width: string
}

export const RadioButtonContainer = styled.div<RadioButtonContainerProps>`
  position: relative;
  height: ${(props) => props.height || '100%'};
  width: ${(props) => props.height || '100%'};
  margin: 4px;
  :hover {
    cursor: pointer;
  }
`

export const StyledRadioLabel = styled.label`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  width: 100%;
  background-color: none;
  color: ${(props) => props.theme.colors.grey};
  border-radius: 6px;
  transition: all 0.4s ease;
`

export const StyledRadioButton = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 100;
  :hover {
    cursor: pointer;
  }
  &:checked + ${StyledRadioLabel} {
    background-color: ${(props) => props.theme.colors.highlight};
    color: ${(props) => props.theme.colors.primaryLight};
  }
`

export const ExampleText = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.grey};
  padding: 4px 0;
`

export const StyledSubmitButton = styled.button`
  font-size: 16px;
  padding: 10px 14px;
  font-weight: bold;
  outline: none;
  color: ${(props) => props.theme.colors.primaryLight};
  background-color: ${(props) => props.theme.colors.primaryDark};
  border: none;
  border-radius: 30px;
  :hover {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.3;
  }
`

interface SubmitButtonProps {
  disabled?: boolean
  loading?: boolean
  text: string
}

export const SubmitButton = ({
  disabled = false,
  loading = false,
  text,
}: SubmitButtonProps) => (
  <FlexBox direction="row" justify="center">
    {loading ? (
      <StyledSubmitButton disabled={true}>
        <LoadingDots width={20} height={20} />
      </StyledSubmitButton>
    ) : (
      <StyledSubmitButton disabled={disabled}>{text}</StyledSubmitButton>
    )}
  </FlexBox>
)
