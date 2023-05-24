import { createAction } from '@reduxjs/toolkit';

const getHistoryInitialized = createAction('getHistory/initialized');
const getHistorySuccessful = createAction('getHistory/successful');
const saveHistoryInitialized = createAction('saveHistory/initialized');
const saveHistorySuccessful = createAction('saveHistory/successful');

export const actions = {
  getHistoryInitialized,
  getHistorySuccessful,
  saveHistoryInitialized,
  saveHistorySuccessful,
};
