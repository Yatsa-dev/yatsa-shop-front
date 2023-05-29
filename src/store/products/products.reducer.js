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
      const prevMarkets = state?.markets;
      let response;
      if (prevMarkets) {
        prevMarkets.forEach(i => {
          if (i?.market === action.payload.market) {
            response = Object.assign(i);
            response.count += 1;
            return response;
          } else {
            response = { market: action.payload.market, count: 1 };

            return response;
          }
        });
        const lateMarkers = prevMarkets?.filter(
          x => x?.id !== action.payload.market,
        );
        return {
          ...state,
          products: [...prev, action.payload],
          markets: [...lateMarkers, response],
        };
      } else {
        return {
          ...state,
          products: [...prev, action.payload],
          markets: [response],
        };
      }

    case productsActions.deleteProductInitialized.type:
      return state;
    case productsActions.deleteProductSuccessful.type:
      const markets = state.markets;

      const items = state.products.filter(x => x.id !== action.payload);

      const obj = state.products.find(i => i.id === action.payload);

      let newMarket;
      markets.forEach(x => {
        const fined = x.market === obj?.market;
        if (fined) {
          newMarket = Object.assign(x);
          newMarket.count -= 1;
          return newMarket;
        }
      });
      return {
        ...state,
        products: items,
        markets: [...markets],
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

    case productsActions.clearMarketsInitialized.type:
      return state;
    case productsActions.clearMarketsSuccessful.type:
      return {
        ...state,
        markets: [],
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
