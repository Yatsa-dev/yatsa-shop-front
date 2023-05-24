import { actions as authActions } from './auth.actions';

const initialState = {
  access_token: null,
  expires_at: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActions.getAuthInitialized.type:
      return state;
    case authActions.getAuthSuccessful.type: {
      return {
        ...state,
        access_token: action.payload.access_token,
        expires_at: action.payload.expires_at,
      };
    }
    case authActions.signupInitialized.type:
      return state;
    case authActions.signupSuccessful.type:
      return {
        ...state,
        access_token: action.payload.access_token,
        expires_at: action.payload.expires_at,
      };

    default:
      return state;
  }
};

export default authReducer;
