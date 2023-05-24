import { actions as baseActions } from './base.actions';

const initialState = {
  loading: 0,
  errors: {},
};

const baseReducer = (state = initialState, action) => {
  switch (action.type) {
    case baseActions.loadingStart.type:
      return {
        ...state,
        loading: state.loading + 1,
      };
    case baseActions.loadingFinish.type:
      return {
        ...state,
        loading: state.loading - 1,
      };
    case baseActions.addError.type:
      return {
        ...state,
        errors: { ...state.errors, [action.payload.id]: action.payload.error },
      };
    case baseActions.removeError.type: {
      const errors = { ...state.errors };
      delete errors[action.payload.id];

      return { ...state, errors };
    }
    default:
      return state;
  }
};
export default baseReducer;
