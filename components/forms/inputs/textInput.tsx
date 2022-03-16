import React from 'react'
import styled from 'styled-components'

export const StyledTextInput = styled.input`
  display: inline;
  font-size: 16px;
  padding: 16px;
  margin: 2px 0;
  background: ${(props) => props.theme.colors.primaryLight};
  border: none;
  border-radius: 2px;
`

interface TextInputProps {
  name: string
  placeholder?: string
  value?: string
  setValue: (v: string) => void
  size?: number
  maxLength?: number
  onKeyDown?: (e: React.KeyboardEvent) => void
}

const TextInput = ({
  name,
  placeholder = null,
  value,
  setValue,
  size = 40,
  maxLength = null,
  onKeyDown,
}: TextInputProps) => {
  return (
    <StyledTextInput
      name={name}
      type="text"
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => setValue(e.target.value)}
      size={size}
      maxLength={maxLength}
      onKeyDown={onKeyDown}
    />
  )
}

export default TextInput
