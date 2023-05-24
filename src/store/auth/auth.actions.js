import { createAction } from '@reduxjs/toolkit';

const getAuthInitialized = createAction('getAuth/initialized');
const getAuthSuccessful = createAction('getAuth/successful');
const signupInitialized = createAction('signup/initialized');
const signupSuccessful = createAction('signup/successful');

export const actions = {
  getAuthInitialized,
  getAuthSuccessful,
  signupInitialized,
  signupSuccessful,
};
