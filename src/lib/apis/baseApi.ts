import axiosInstance from './axios';

export class BaseApi {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async get<T>(endpoint: string = '', params?: any): Promise<T> {
    return axiosInstance.get(`${this.baseUrl}${endpoint}`, { params });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async post<T>(endpoint: string = '', data?: any): Promise<T> {
    return axiosInstance.post(`${this.baseUrl}${endpoint}`, data);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async put<T>(endpoint: string = '', data?: any): Promise<T> {
    return axiosInstance.put(`${this.baseUrl}${endpoint}`, data);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async delete<T>(endpoint: string = ''): Promise<T> {
    return axiosInstance.delete(`${this.baseUrl}${endpoint}`);
  }
}
