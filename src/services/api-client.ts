import axios, { AxiosRequestConfig } from "axios";

export type FetchResponse<T> =  {
  count: number,
  next: string | null,
  results: T[],
  }

const RAWG_KEY = import.meta.env.VITE_RAWG_KEY;

const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWG_KEY
  }
})

class APIClient<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
    .get<FetchResponse<T>>(this.endpoint, config)
    .then(res => res.data)
  }


}

export default APIClient