import styled from 'styled-components'

export const StyledNumberInput = styled.input`
  display: inline;
  font-size: 16px;
  padding: 16px;
  margin: 2px 0;
  background: ${(p) => p.theme.colors.primaryLight};
  border: none;
  border-radius: 4px;
  width: ${(p) => p.width || 'auto'};
  text-align: center;
  outline: none;
`

interface NumberInputProps {
  name: string
  placeholder?: string
  value?: string
  setValue: (v: string) => void
  min?: number
  max?: number
  step?: number
  width?: string // Display width of the input
}

const NumberInput = ({
  name,
  placeholder = null,
  value,
  setValue,
  min = null,
  max = null,
  step = 1,
  width = '60px',
}: NumberInputProps) => {
  return (
    <StyledNumberInput
      name={name}
      type="number"
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => setValue(e.target.value || '0')}
      min={min}
      max={max}
      step={step}
      width={width}
    />
  )
}

export default NumberInput
