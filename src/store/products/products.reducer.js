import { actions as productsActions } from './products.actions';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsActions.getProductsInitialized.type:
      return state;
    case productsActions.getProductsSuccessful.type: {
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    }
    case productsActions.createProductInitialized.type:
      return state;
    case productsActions.createProductSuccessful.type:
      const prev = state.products;
      return {
        ...state,
        products: [...prev, action.payload],
      };

    default:
      return state;
  }
};

export default productsReducer;
