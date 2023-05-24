import * as apiService from '../utils/apiService';
import { SAVE_URL, FIND_URL } from './constants';

export class HistoryService {
  async create(body) {
    const { data } = await apiService.axiosPrivate.post(SAVE_URL, body);

    return data;
  }

  async find() {
    const { data } = await apiService.axiosPublic.get(FIND_URL);

    return data;
  }
}
export const historyService = new HistoryService();
