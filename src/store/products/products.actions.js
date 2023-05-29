import { createAction } from '@reduxjs/toolkit';

const getProductsInitialized = createAction('getProducts/initialized');
const getProductsSuccessful = createAction('getProducts/successful');
const createProductInitialized = createAction('createProduct/initialized');
const createProductSuccessful = createAction('createProduct/successful');
const deleteProductInitialized = createAction('deleteProduct/initialized');
const deleteProductSuccessful = createAction('deleteProduct/successful');
const addProductInitialized = createAction('addProduct/initialized');
const addProductSuccessful = createAction('addProduct/successful');
const removeProductInitialized = createAction('removeProduct/initialized');
const removeProductSuccessful = createAction('removeProduct/successful');
const marketsInitialized = createAction('markets/initialized');
const marketsSuccessful = createAction('markets/successful');
const addParamInitialized = createAction('addParam/initialized');
const addParamSuccessful = createAction('addParam/successful');
const removeParamInitialized = createAction('removeParam/initialized');
const removeParamSuccessful = createAction('removeParam/successful');
const clearMarketsInitialized = createAction('clearMarkets/initialized');
const clearMarketsSuccessful = createAction('clearMarkets/successful');

export const actions = {
  getProductsInitialized,
  getProductsSuccessful,
  createProductInitialized,
  createProductSuccessful,
  deleteProductInitialized,
  deleteProductSuccessful,
  addProductInitialized,
  addProductSuccessful,
  removeProductInitialized,
  removeProductSuccessful,
  marketsInitialized,
  marketsSuccessful,
  addParamInitialized,
  addParamSuccessful,
  removeParamInitialized,
  removeParamSuccessful,
  clearMarketsInitialized,
  clearMarketsSuccessful,
};
