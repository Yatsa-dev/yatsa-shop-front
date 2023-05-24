import to from 'await-to-js';
import { actions as historyActions } from './history.actions';
import { historyService } from '../../services/history/productsApiService';

const save = body => async dispatch => {
  dispatch(historyActions.saveHistoryInitialized());

  const [err, data] = await to(historyService.create(body));
  if (err) {
    return;
  } else {
    dispatch(historyActions.saveHistorySuccessful(data));
  }
};

const find = () => async dispatch => {
  dispatch(historyActions.getHistoryInitialized());

  const [err, data] = await to(historyService.find());
  if (err) {
    return;
  } else {
    dispatch(historyActions.getHistorySuccessful(data));
  }
};

export const thunks = {
  save,
  find,
};
