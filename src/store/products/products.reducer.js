import { actions as productsActions } from './products.actions';

const initialState = {
  products: [],
  cart: [],
  markets: [],
  param: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productsActions.getProductsInitialized.type:
      return state;
    case productsActions.getProductsSuccessful.type: {
      return {
        ...state,
        products: [...action.payload],
      };
    }
    case productsActions.createProductInitialized.type:
      return state;
    case productsActions.createProductSuccessful.type:
      const prev = state.products;
      const prevMarkets = state.markets;
      const market = prevMarkets.find(i => i.market === action.payload.market);
      market.count += 1;
      const lateMarkers = prevMarkets.filter(
        x => x.id !== action.payload.market,
      );

      return {
        ...state,
        products: [...prev, action.payload],
        markets: [...lateMarkers],
      };
    case productsActions.deleteProductInitialized.type:
      return state;
    case productsActions.deleteProductSuccessful.type:
      const data = state.products;
      const items = data.filter(x => x.id !== action.payload);
      const markets = state.markets;
      const one = data.find(i => i.id === action.payload);
      let newMarket;
      markets.forEach(x => {
        const fined = x.market === one.market;
        if (fined) {
          newMarket = x;
          newMarket.count -= 1;
        }
        return newMarket;
      });
      const lateM = markets.filter(i => i.market !== newMarket.market);

      return {
        ...state,
        products: items,
        markets: [...lateM, newMarket],
      };

    case productsActions.addParamInitialized.type:
      return state;
    case productsActions.addParamSuccessful.type:
      return {
        ...state,
        param: action.payload,
      };

    case productsActions.removeParamInitialized.type:
      return state;
    case productsActions.removeParamSuccessful.type:
      return {
        ...state,
        param: null,
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

    case productsActions.marketsInitialized.type:
      return state;
    case productsActions.marketsSuccessful.type: {
      return {
        ...state,
        markets: [...state.markets, ...action.payload],
      };
    }

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
