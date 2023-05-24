import { createAction } from '@reduxjs/toolkit';

const loadingStart = createAction('loadingStart');
const loadingFinish = createAction('loadingFinish');

const addError = createAction('addError');
const removeError = createAction('removeError');

export const actions = {
  loadingStart,
  loadingFinish,
  addError,
  removeError,
};
