import { createAction } from '@reduxjs/toolkit';

const getProfileInitialized = createAction('getProfile/initialized');
const getProfileSuccessful = createAction('getProfile/successful');
const clearDataProfileInitialized = createAction(
  'clearDataProfile/initialized',
);
const clearDataProfileSuccessful = createAction('clearDataProfile/successful');

export const actions = {
  getProfileInitialized,
  getProfileSuccessful,
  clearDataProfileInitialized,
  clearDataProfileSuccessful,
};
