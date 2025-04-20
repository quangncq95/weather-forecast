import { Coord, CurrentWeather, WeatherForecast } from '../types/weather';
import { BaseApi } from './baseApi';

const apiKey = import.meta.env.VITE_API_KEY;

class WeatherApi extends BaseApi {
  constructor() {
    super('');
  }

  async getCurrentWeather(data: Coord) {
    const params = {
      lat: data.lat,
      lon: data.lon,
      appid: apiKey,
      units: 'metric',
    };
    return this.get<CurrentWeather>('/data/2.5/weather', params);
  }

  async getForecastWeather(data: Coord & { cnt: number }) {
    const params = {
      lat: data.lat,
      lon: data.lon,
      appid: apiKey,
      units: 'metric',
      cnt: data.cnt,
    };
    return this.get<WeatherForecast>('/data/2.5/forecast/daily', params);
  }
}

export const weatherApi = new WeatherApi();
