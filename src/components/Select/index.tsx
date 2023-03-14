import chevron from '@/assets/icons/chevron-bottom.svg'
import { ComponentProps } from 'react'
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from './styles'

type SelectValue = string

type SelectProps = ComponentProps<typeof FilterInput> & {
  label?: string
  name: string
  defaultLabel?: string
  options: {
    value: string | number
    label: string
  }[]
  onSelect?: (value: SelectValue) => void
}

export function Select({
  label,
  name,
  options,
  defaultLabel = 'Selecione',
  onSelect,
}: SelectProps) {
  function handleChange(value: string) {
    !!onSelect && onSelect(value)
  }

  return (
    <Filter>
      {label && <FilterLabel htmlFor={name}>{label}</FilterLabel>}
      <FilterWrapper>
        <FilterInput
          name={name}
          id={name}
          defaultValue={defaultLabel}
          onChange={(e) => handleChange(e.target.value)}
        >
          <FilterInputOption key={0} value={defaultLabel} disabled>
            {defaultLabel}
          </FilterInputOption>
          {options.map((option) => (
            <FilterInputOption key={option.value} value={option.value}>
              {option.label}
            </FilterInputOption>
          ))}
        </FilterInput>
        <img src={chevron} alt="" />
      </FilterWrapper>
    </Filter>
  )
}
