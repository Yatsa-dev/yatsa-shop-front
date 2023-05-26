import { createAction } from '@reduxjs/toolkit';

const getAuthInitialized = createAction('getAuth/initialized');
const getAuthSuccessful = createAction('getAuth/successful');
const signupInitialized = createAction('signup/initialized');
const signupSuccessful = createAction('signup/successful');
const logoutInitialized = createAction('logout/initialized');
const logoutSuccessful = createAction('logout/successful');
const refreshInitialized = createAction('refresh/initialized');
const refreshSuccessful = createAction('refresh/successful');

export const actions = {
  getAuthInitialized,
  getAuthSuccessful,
  signupInitialized,
  signupSuccessful,
  logoutInitialized,
  logoutSuccessful,
  refreshInitialized,
  refreshSuccessful,
};
