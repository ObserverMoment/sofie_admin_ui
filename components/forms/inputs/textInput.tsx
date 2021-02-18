import styled from 'styled-components'

export const StyledTextInput = styled.input`
  display: inline;
  font-size: 16px;
  padding: 16px;
  margin: 2px 0;
  background: ${(props) => props.theme.colors.primaryLight};
  border: none;
  border-radius: 2px;
  ::placeholder {
    color: ${(props) => props.theme.colors.grey};
  }
`

interface TextinputProps {
  name: string
  placeholder?: string
  value?: string
  setter: (v: string) => void
  size?: number
  maxLength?: number
}

const TextInput = ({
  name,
  placeholder = null,
  value,
  setter,
  size = 40,
  maxLength = null,
}: TextinputProps) => {
  return (
    <StyledTextInput
      name={name}
      type="text"
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => setter(e.target.value)}
      size={size}
      maxLength={maxLength}
    />
  )
}

export default TextInput
