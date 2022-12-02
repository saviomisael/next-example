import { screen } from '@testing-library/react'
import { ButtonExample } from '.'
import { renderTheme } from '../../utils/test-utils'

describe('ButtonExample', () => {
  it('should be in the document', () => {
    renderTheme(<ButtonExample label='button example' />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
