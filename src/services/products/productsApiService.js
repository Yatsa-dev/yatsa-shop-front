import * as apiService from '../utils/apiService';
import { CREATE_URL, FIND_URL, DELETE_URL, MARKETS_URL } from './constants';

export class ProductsService {
  async create(formData) {
    const { data } = await apiService.axiosPrivate.post(CREATE_URL, formData);

    return data;
  }

  async find(param) {
    const { data } = await apiService.axiosPublic.get(FIND_URL, {
      params: {
        market: param,
      },
    });

    return data;
  }

  async getMarkets() {
    const { data } = await apiService.axiosPublic.get(MARKETS_URL);

    return data;
  }

  async delete(productId) {
    const { data } = await apiService.axiosPrivate.delete(
      `${DELETE_URL}/${productId}`,
    );

    return data;
  }
}
export const productsService = new ProductsService();
