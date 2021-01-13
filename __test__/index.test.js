import { render, screen } from '@testing-library/react'
import HomePage from '../pages/index'

describe('HomePage Component', () => {
  render(<HomePage />)
  screen.debug()

  fail('not implemented')
})
