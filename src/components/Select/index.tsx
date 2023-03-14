import chevron from '@/assets/icons/chevron-bottom.svg'
import { ComponentProps } from 'react'
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from './styles'

type SelectProps = ComponentProps<typeof FilterInput> & {
  label?: string
  name: string
  defaultLabel?: string
  options: {
    value: string | number
    label: string
  }[]
}

export function Select({
  label,
  name,
  options,
  defaultLabel = 'Selecione',
}: SelectProps) {
  return (
    <Filter>
      {label && <FilterLabel htmlFor={name}>{label}</FilterLabel>}
      <FilterWrapper>
        <FilterInput name={name} id={name}>
          <FilterInputOption value="" disabled selected>
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
