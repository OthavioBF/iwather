import { render, screen } from '@testing-library/react-native'
import { Day } from '.'

import clearDay from '@assets/clear_day.svg'

describe("Component: Day", () => {
  it('should render current day', () => {
    render(<Day data={{ day: '18/07', min: '30C', max: '34C', icon: clearDay, weather: 'Ceu limpo' }} />)

    expect(screen.getByText('18/07')).toBeTruthy()
  })
})