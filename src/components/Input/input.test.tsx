import { render, screen } from '@testing-library/react-native'
import { Input } from '.'

describe("Component: Input", () => {
  it('should render without activity indicator', () => {
    render(<Input />)

    const indicator = screen.queryByTestId('activity-indicator')

    expect(indicator).toBeNull()
  })

  it('should render with activity indicator', () => {
    render(<Input isLoading />)

    const indicator = screen.getByTestId('activity-indicator')

    expect(indicator).toBeTruthy()
  })
})