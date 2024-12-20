import styled, { css } from 'styled-components'
import { Cell } from 'components/Calendar/Base/Cell'
import { Colors } from 'styles'

export interface SingleSelectProps {
  $isInvalid?: boolean
  $isSelected?: boolean
  $isInMonth?: boolean
}

export const SingleSelectCell = styled(Cell)<SingleSelectProps>`
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: ${Colors.background.primarySubtle};
  }

  ${({ $isSelected, $isInMonth }) =>
    $isSelected &&
    $isInMonth &&
    css`
      background-color: ${Colors.background.primary};
      color: ${Colors.text.inverted};
      font-weight: bold;
      border: 1px solid ${Colors.border.focus};
      border-radius: 4px;
    `}

  ${({ $isInvalid }) =>
    $isInvalid &&
    css`
      pointer-events: none;
      color: ${Colors.neutral.gray};
    `}
`
