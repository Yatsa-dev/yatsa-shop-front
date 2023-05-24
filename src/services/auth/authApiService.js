import * as apiService from '../utils/apiService';
import { LOGIN_URL, GOOGLE_URL, SIGNUP_URL } from './constants';

export class AuthService {
  async login(body) {
    const { data } = await apiService.axiosPublic.post(LOGIN_URL, body);

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
