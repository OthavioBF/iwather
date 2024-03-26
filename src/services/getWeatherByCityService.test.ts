import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { api } from "./api"
import { getWeatherByCityService } from "./getWeatherByCityService";

describe('Service: getWeatherByCityService', () => {
  it('should return city details', async () => {
    const currentDay = new Date();
    const nextDay = new Date();
    nextDay.setDate(currentDay.getDate() + 1)

    jest.spyOn(api, 'get').mockResolvedValue({ data: mockWeatherAPIResponse})
  
    const response = await getWeatherByCityService({latitude: 1234, longitude: 456})

    expect(response).toHaveProperty('today')
  })
})