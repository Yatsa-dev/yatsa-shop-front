import to from 'await-to-js';
import { actions as authActions } from './auth.actions';
import { authService } from '../../services/auth/authApiService';
import { addError } from '../base/base.thunks';
import { thunks as usersThunks } from '../user/user.thunks';
import { actions as userActions } from '../user/user.actions';
import { actions as productsActions } from '../products/products.actions';

const login = (body, navigate) => async dispatch => {
  dispatch(authActions.getAuthInitialized());

  const [err, data] = await to(authService.login(body));
  if (err) {
    return;
  } else if (data) {
    navigate('/');
    const res = await dispatch(authActions.getAuthSuccessful(data));
    if (res) {
      dispatch(usersThunks.profile());
    }
  }
};

const refresh = body => async dispatch => {
  dispatch(authActions.refreshInitialized());
  const [err, data] = await to(authService.refresh(body));
  if (err) {
    dispatch(authActions.logoutSuccessful());
  }
  dispatch(authActions.refreshSuccessful(data));
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutInitialized());

  localStorage.removeItem('persist:root');

  dispatch(userActions.clearDataProfileSuccessful());
  dispatch(productsActions.clearMarketsSuccessful());
  dispatch(authActions.logoutSuccessful());
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
  logout,
  refresh,
};
