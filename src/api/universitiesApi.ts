import { Universities } from "../models";
import axiosClient from "./axiosClient";

const universitiesApi = {
  getAll(): Promise<Universities[]> {
    const url = 'search?name=Middle';
    return axiosClient.get(url);
  }
}

export default universitiesApi;
