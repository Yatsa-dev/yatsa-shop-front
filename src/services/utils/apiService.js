import axios from 'axios';
import { addError } from '../../store/base/base.thunks';
import { actions as loadingActions } from '../../store/base/base.actions';
import { store } from '../../store/store';
import { BASE_URL } from '../../config/config';

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

    if (store?.getState()?.auth?.access_token) {
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
