import { Reducer } from 'redux';

import { AppState } from '../store';
import { CartActionEnum, CartActionUnion } from './models/actions';
import { CartState } from './models/state';
import { CartItem } from './models/Cart';

const initialState: CartState = {
  processing: false,
  cart: {} as CartItem[],
  error: null,
};

export const cartReducer: Reducer<CartState, CartActionUnion> = (state = initialState, action) => {
  switch (action.type) {
    /*
    case CartActionEnum.CREATE_CART_REQUEST:
      return { ...state, processing: true };
    case CartActionEnum.CREATE_CART_SUCCESS:
      return { ...state, processing: false, cart: action.payload.cart };
    case CartActionEnum.CREATE_CART_FAILURE:
      return { ...state, processing: false, error: action.payload.error };
    case CartActionEnum.DELETE_CART_REQUEST:
      return { ...state, processing: true };
    case CartActionEnum.DELETE_CART_SUCCESS:
      return { ...state, processing: false, cart: action.payload.cart };
    case CartActionEnum.DELETE_CART_FAILURE:
      return { ...state, processing: false, error: action.payload.error };
    case CartActionEnum.ADD_ITEM_TO_CART_REQUEST:
      return { ...state, processing: true };
    case CartActionEnum.ADD_ITEM_TO_CART_SUCCESS:
      return { ...state, processing: false, cart: action.payload.cart };
    case CartActionEnum.ADD_ITEM_TO_CART_FAILURE:
      return { ...state, processing: false, error: action.payload.error };
    case CartActionEnum.DELETE_ITEM_FROM_CART_REQUEST:
      return { ...state, processing: true };
    case CartActionEnum.DELETE_ITEM_FROM_CART_SUCCESS:
      return { ...state, processing: false, cart: action.payload.cart };
    case CartActionEnum.DELETE_ITEM_FROM_CART_FAILURE:
      return { ...state, processing: false, error: action.payload.error };
      */
    case CartActionEnum.GET_CART_REQUEST:
      return { ...state, processing: true };
    case CartActionEnum.GET_CART_SUCCESS:
      return { ...state, processing: false, cart: action.payload.cart, error: null };
    case CartActionEnum.GET_CART_FAILURE:
      return { ...state, processing: false, error: action.payload.error };
    default:
      return state;
  }
};

export const selectCartItems = (state: AppState) => {
  if (state.cart.cart == undefined) {
    return [{} as CartItem];
  }
  return state.cart.cart;
};
export const selectCart = (state: AppState) => {
  if (state.cart === undefined) {
    return {} as CartState;
  }
  return state.cart;
};
