import styled from 'styled-components'

export const StyledTextAreaInput = styled.textarea`
  display: inline;
  font-size: 16px;
  padding: 16px;
  margin: 2px 0;
  background: ${(props) => props.theme.colors.primaryLight};
  border: none;
  border-radius: 2px;
`

interface TextAreaInputProps {
  name: string
  placeholder?: string
  value?: string
  setValue: (v: string) => void
  maxLength?: number
}

const TextAreaInput = ({
  name,
  placeholder = null,
  value,
  setValue,
  maxLength = null,
}: TextAreaInputProps) => {
  return (
    <StyledTextAreaInput
      name={name}
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => setValue(e.target.value)}
      maxLength={maxLength}
    />
  )
}

export default TextAreaInput
