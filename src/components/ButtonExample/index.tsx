import * as Styled from './styles'

export interface ButtonExampleProps {
  label: string
}

export const ButtonExample = ({ label }: ButtonExampleProps) => {
  return <Styled.Button type='button'>{label}</Styled.Button>
}
