import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  margin-top: 5px;
  padding: 10px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: rgb(255, 128, 128);
  color: ${({ theme }) => theme.colors.primaryColor};
  transition: transform 0.3s, filter 0.3s;

  &:active {
    filter: brightness(0.8);
    transform: translateY(5px);
  }
`
