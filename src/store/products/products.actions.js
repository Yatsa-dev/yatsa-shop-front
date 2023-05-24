import { createAction } from '@reduxjs/toolkit';

const getProductsInitialized = createAction('getProducts/initialized');
const getProductsSuccessful = createAction('getProducts/successful');
const createProductInitialized = createAction('createProduct/initialized');
const createProductSuccessful = createAction('createProduct/successful');
const deleteProductInitialized = createAction('deleteProduct/initialized');
const deleteProductSuccessful = createAction('deleteProduct/successful');

export const actions = {
  getProductsInitialized,
  getProductsSuccessful,
  createProductInitialized,
  createProductSuccessful,
  deleteProductInitialized,
  deleteProductSuccessful,
};
