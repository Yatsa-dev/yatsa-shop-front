import * as apiService from '../utils/apiService';
import {
  LOGIN_URL,
  GOOGLE_URL,
  SIGNUP_URL,
  LOGOUT_URL,
  REFRESH_URL,
} from './constants';

export class AuthService {
  async login(body) {
    const { data } = await apiService.axiosPublic.post(LOGIN_URL, body);

    return data;
  }

  async logout() {
    const { data } = await apiService.axiosPrivate.get(LOGOUT_URL);

    return data;
  }

  async refresh(body) {
    const { data } = await apiService.axiosPublic.post(REFRESH_URL, body);

    return data;
  }

  async google(body) {
    const { data } = await apiService.axiosPublic.get(GOOGLE_URL, {
      headers: {
        gauthorization: body,
      },
    });
    return data;
  }

  async signup(body) {
    const { data } = await apiService.axiosPublic.post(SIGNUP_URL, body);
    return data;
  }
}
export const authService = new AuthService();
