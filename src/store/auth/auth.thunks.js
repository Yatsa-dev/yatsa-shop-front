import to from 'await-to-js';
import { actions as authActions } from './auth.actions';
import { authService } from '../../services/auth/authApiService';
import { addError } from '../base/base.thunks';

const login = (body, navigate) => async dispatch => {
  dispatch(authActions.getAuthInitialized());

  const [err, data] = await to(authService.login(body));
  if (err) {
    return;
  } else {
    navigate('/');
    dispatch(authActions.getAuthSuccessful(data));
  }
};
const googleCred = (body, navigate) => async dispatch => {
  const [err, data] = await to(authService.google(body));

  if (err) {
    dispatch(addError(err.message));
  } else {
    navigate('/');
    dispatch(authActions.getAuthSuccessful(data));
  }
};

const signup = (body, navigate) => async dispatch => {
  dispatch(authActions.signupInitialized());

  const [err, data] = await to(authService.signup(body));
  if (err) {
    return;
  }
  navigate('/');
  dispatch(authActions.signupSuccessful(data));
};

export const thunks = {
  login,
  googleCred,
  signup,
};
