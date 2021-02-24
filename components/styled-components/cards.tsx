import styled from 'styled-components'

interface SummaryCardProps {
  margin?: string
  maxWidth?: string
}

export const SummaryCard = styled.div<SummaryCardProps>`
  box-shadow: 0 3px 16px 0px rgb(0 0 0 / 2%), 0 5px 8px -4px rgb(0 0 0 / 10%);
  padding: 16px;
  border-radius: 4px;
  margin: ${(p) => p.margin || '2px'};
  max-width: ${(p) => p.maxWidth || 'auto'};
`
