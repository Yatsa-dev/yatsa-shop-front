import * as apiService from '../utils/apiService';
import { PROFILE_URL } from './constants';

export class UsersService {
  async profile() {
    const { data } = await apiService.axiosPrivate.get(PROFILE_URL);

    return data;
  }
}
export const usersService = new UsersService();
