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

const find = param => async dispatch => {
  dispatch(productsActions.getProductsInitialized());

  const [err, data] = await to(productsService.find(param));
  if (err) {
    return;
  } else {
    dispatch(productsActions.getProductsSuccessful(data));
  }
};

const remove = productId => async dispatch => {
  dispatch(productsActions.deleteProductInitialized());

  const [err] = await to(productsService.delete(productId));
  if (err) {
    return;
  }

  dispatch(productsActions.deleteProductSuccessful(productId));
};

const add = productId => async dispatch => {
  dispatch(productsActions.addProductInitialized());
  dispatch(productsActions.addProductSuccessful(productId));
};

const clear = productId => async dispatch => {
  dispatch(productsActions.removeProductInitialized());
  dispatch(productsActions.removeProductSuccessful(productId));
};

const findMarkets = () => async dispatch => {
  dispatch(productsActions.marketsInitialized());

  const [err, data] = await to(productsService.getMarkets());
  if (err) {
    return;
  } else {
    dispatch(productsActions.marketsSuccessful(data));
  }
};

const addParam = param => async dispatch => {
  dispatch(productsActions.addParamInitialized());
  dispatch(productsActions.addParamSuccessful(param));
};

const removeParam = () => async dispatch => {
  dispatch(productsActions.removeParamInitialized());
  dispatch(productsActions.removeParamSuccessful());
};

export const thunks = {
  create,
  find,
  remove,
  add,
  clear,
  findMarkets,
  addParam,
  removeParam,
};
