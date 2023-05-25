import to from 'await-to-js';
import { actions as usersActions } from './user.actions';
import { usersService } from '../../services/user/usersApiService';

const profile = () => async dispatch => {
  dispatch(usersActions.getProfileInitialized());

  const [err, data] = await to(usersService.profile());
  if (err) {
    return;
  } else {
    dispatch(usersActions.getProfileSuccessful(data));
  }
};

export const thunks = {
  profile,
};
