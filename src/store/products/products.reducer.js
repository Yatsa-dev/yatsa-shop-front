import { actions as productsActions } from './products.actions';

const initialState = {
  products: [],
  cart: [],
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
    case productsActions.deleteProductInitialized.type:
      return state;
    case productsActions.deleteProductSuccessful.type:
      const data = state.products;
      const items = data.filter(x => x.id !== action.payload);
      return {
        ...state,
        products: items,
      };

    case productsActions.addProductInitialized.type:
      return state;
    case productsActions.addProductSuccessful.type:
      const products = state.products;
      const prevCart = state.cart;
      const fined = products.find(p => p.id === action.payload);
      const finedFromProduct = { ...fined, count: 1 };

      const exist = prevCart.find(p => p.id === action.payload);
      if (exist) {
        let newCart = { ...exist };
        newCart.count += 1;

        return {
          ...state,
          cart: [newCart],
        };
      }
      return {
        ...state,
        cart: [...state.cart, finedFromProduct],
      };

    case productsActions.removeProductInitialized.type:
      return state;
    case productsActions.removeProductSuccessful.type:
      const cartData = state.cart;
      const carts = cartData.filter(x => x.id !== action.payload);
      return {
        ...state,
        cart: carts,
      };

    default:
      return state;
  }
};

export default productsReducer;
