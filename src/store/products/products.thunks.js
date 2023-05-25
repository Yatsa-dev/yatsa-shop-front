import to from 'await-to-js';
import { actions as productsActions } from './products.actions';
import { productsService } from '../../services/products/productsApiService';

const create = (formData, navigate) => async dispatch => {
  dispatch(productsActions.createProductInitialized());

  const [err, data] = await to(productsService.create(formData));
  if (err) {
    return;
  } else {
    dispatch(productsActions.createProductSuccessful(data));
    navigate('/');
  }
};

const find = () => async dispatch => {
  dispatch(productsActions.getProductsInitialized());

  const [err, data] = await to(productsService.find());
  if (err) {
    return;
  } else {
    dispatch(productsActions.getProductsSuccessful(data));
  }
};

const remove = productId => async dispatch => {
  dispatch(productsActions.deleteProductInitialized());

  const [err, data] = await to(productsService.delete(productId));
  if (err) {
    return;
  } else {
    dispatch(productsActions.deleteProductSuccessful(productId));
  }
};

const add = productId => async dispatch => {
  dispatch(productsActions.addProductInitialized());
  dispatch(productsActions.addProductSuccessful(productId));
};

const clear = productId => async dispatch => {
  dispatch(productsActions.removeProductInitialized());
  dispatch(productsActions.removeProductSuccessful(productId));
};

export const thunks = {
  create,
  find,
  remove,
  add,
  clear,
};
