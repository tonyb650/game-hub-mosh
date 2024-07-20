import axios from "axios";

export type FetchResponse<T> =  {
  count: number,
  results: T[],
  }


const RAWG_KEY = import.meta.env.VITE_RAWG_KEY;

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWG_KEY
  }
})