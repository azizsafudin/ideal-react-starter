import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should work as expected', () => {
    expect(render(<App />)).toBeTruthy()
  })
})
