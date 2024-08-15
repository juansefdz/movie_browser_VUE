import type { AxiosInstance } from "axios";
import axios from "axios";

class ClientHTTP {
  private api: AxiosInstance;
  private apiKey: string = "419ed7f3";

  constructor() {
    this.api = axios.create({
      baseURL: "http://www.omdbapi.com",
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        apiKey: this.apiKey,
      },
    });
  }

  getApi() {
    return this.api;
  }
}

export default new ClientHTTP().getApi();
