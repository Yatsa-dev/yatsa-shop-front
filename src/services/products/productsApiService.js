import * as apiService from '../utils/apiService';
import { CREATE_URL, FIND_URL, DELETE_URL } from './constants';

export class ProductsService {
  async create(formData) {
    const { data } = await apiService.axiosPrivate.post(CREATE_URL, formData);

    return data;
  }

  async find() {
    const { data } = await apiService.axiosPublic.get(FIND_URL);

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
