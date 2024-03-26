import { render, screen, fireEvent } from '@testing-library/react-native'
import { SelectList } from '.'

describe("Component: SelectList", () => {
  it('should return city details selected', () => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 4567 }, 
      { id: '2', name: 'Campo Grande', latitude: 1234, longitude: 456 }
    ]

    const onPress = jest.fn();

    render(<SelectList
        data={data}
        onChange={() => {}}
        onPress={onPress}
      />)

    const city = screen.getByText('Campo Grande', { exact: false }) // vai procurar pelo texto exatamente igual ao provido, o exact false tira essa exatidao na procura

    fireEvent.press(city)

    expect(onPress).toHaveBeenCalledWith(data[1])
  })

  it('should not show options when data props is empty', () => {
    render(
      <SelectList
        data={[]}
        onChange={() => {}}
        onPress={() => {}}
      />
    )

    const options = screen.getByTestId('options')

    expect(options.children).toHaveLength(0)
  })
})