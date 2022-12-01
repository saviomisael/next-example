import { ThemeProvider } from 'styled-components'
import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/Globals'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => {
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  }
]
