import { axiosPlugin } from "@/plugins/axios";

export class SessionService {
  #modelName = "session";

  async login({ email, password }) {
    let response;
    try {
      response = await axiosPlugin.post(`${this.#modelName}/login`, {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
    } catch (e) {
      throw e;
    }
    return response;
  }

  logout() {
    localStorage.removeItem("token");
  }
}

export const sessionService = new SessionService();
