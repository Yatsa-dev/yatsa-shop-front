import axios from 'axios';
import { addError } from '../../store/base/base.thunks';
import { actions as loadingActions } from '../../store/base/base.actions';
import { store } from '../../store/store';
import { BASE_URL } from '../../config/config';
import { thunks as authThunks } from '../../store/auth/auth.thunks';
import { CRITICAL_TIME } from '../auth/constants';

export const axiosPublic = axios.create({ baseURL: BASE_URL });
export const axiosPrivate = axios.create({ baseURL: BASE_URL });

const responseErrorInterseptor = error => {
  const { message } = error.response.data;
  store.dispatch(addError(message));
  store.dispatch(loadingActions.loadingFinish());

  return Promise.reject(error);
};

const responseInterseptor = response => {
  store.dispatch(loadingActions.loadingFinish());

  return response;
};

axiosPrivate.interceptors.response.use(
  responseInterseptor,
  responseErrorInterseptor,
);

axiosPublic.interceptors.response.use(
  responseInterseptor,
  responseErrorInterseptor,
);

axiosPublic.interceptors.request.use(request => {
  store.dispatch(loadingActions.loadingStart());

  return request;
});

axiosPrivate.interceptors.request.use(
  async config => {
    store.dispatch(loadingActions.loadingStart());

    const expireTime = store?.getState()?.auth?.expires_at;
    const refreshToken = store?.getState()?.auth?.refresh_token;
    const tokenTime = Date.now() - expireTime / 1000 / 60;

    if (store?.getState()?.auth?.access_token) {
      if (tokenTime <= CRITICAL_TIME) {
        await store.dispatch(
          authThunks.refresh({ refresh_token: refreshToken }),
        );
      }

      if (config?.headers) {
        config.headers.authorization = `Bearer ${
          store?.getState()?.auth?.access_token
        }`;
      }
    }
    return config;
  },
  error => Promise.reject(error),
);
