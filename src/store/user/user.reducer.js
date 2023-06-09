import { actions as usersActions } from './user.actions';

const initialState = {
  id: null,
  email: null,
  username: null,
  role: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case usersActions.getProfileInitialized.type:
      return state;
    case usersActions.getProfileSuccessful.type: {
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        username: action.payload.username,
        role: action.payload.role,
      };
    }

    case usersActions.clearDataProfileInitialized.type:
      return state;
    case usersActions.clearDataProfileSuccessful.type: {
      return {
        ...state,
        id: null,
        email: null,
        username: null,
        role: null,
      };
    }

    default:
      return state;
  }
};

export default usersReducer;
