import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage"

const newCity = { id: '1', name: 'Sao paulo', latitude: 0, longitude: 1}

describe('Storage: CityStorage', () => {
  it('should return null when dont have a city storaged', async () => {
    const response = await getStorageCity()
    expect(response).toBeNull();
  })

  it('should return city storaged', async () => {
    await saveStorageCity(newCity)

    const response = await getStorageCity()

    expect(response).toEqual(newCity);
  })

  it('should be able to remove city from storage', async () => {
    await saveStorageCity(newCity)
    await removeStorageCity()
    const response = await getStorageCity()

    expect(response).toBeNull();
  })
})