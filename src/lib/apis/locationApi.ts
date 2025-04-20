import { Location } from '@/lib/types/location';
import { BaseApi } from './baseApi';
import { Coord } from '../types/weather';

const apiKey = import.meta.env.VITE_API_KEY;

class LocationApi extends BaseApi {
  constructor() {
    super('/geo/1.0');
  }

  async getLocationsByName(name: string) {
    const params = {
      q: name,
      limit: 5,
      appid: apiKey,
    };
    return this.get<Location[]>('/direct', params);
  }

  async getLocationByLatLon(data: Coord) {
    const params = {
      lat: data.lat,
      lon: data.lon,
      limit: 5,
      appid: apiKey,
    };
    return this.get<Location[]>('/reverse', params);
  }
}

export const locationApi = new LocationApi();
