import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth.reducer';
import baseReducer from './base/base.reducer';
import productsReducer from './products/products.reducer';
import usersReducer from './user/user.reducer';

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['access_token', 'expires_at'],
};

const reducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  base: baseReducer,
  products: productsReducer,
  user: usersReducer,
});

export default reducer;
