import { createAction } from '@reduxjs/toolkit';

const getProfileInitialized = createAction('getProfile/initialized');
const getProfileSuccessful = createAction('getProfile/successful');

export const actions = {
  getProfileInitialized,
  getProfileSuccessful,
};
