import { render, screen } from '@testing-library/react-native'

import clearDay from '@assets/clear_day.svg'
import { NextDays } from '.'

describe("Component: NextDays", () => {
  it('should render next five days', () => {
    render(<NextDays data={[{ day: '18/07', min: '30C', max: '34C', icon: clearDay, weather: 'Ceu limpo' }]} />)

    expect(screen.getByText('18/07')).toBeTruthy()
  })
})