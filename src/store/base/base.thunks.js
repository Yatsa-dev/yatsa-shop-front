import { v4 as uuidv4 } from 'uuid';
import { actions as baseActions } from './base.actions';

export const addError = (error) => async (dispatch) => {
  const id = uuidv4();
  dispatch(baseActions.addError({ id, error }));

  setTimeout(async () => {
    await dispatch(baseActions.removeError({ id }));
  }, 3000);
};
