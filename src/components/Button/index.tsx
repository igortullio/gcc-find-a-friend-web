import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Container } from './styles'

type ButtonProps = {
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, ...rest }: ButtonProps) {
  return <Container {...rest}>{children}</Container>
}
