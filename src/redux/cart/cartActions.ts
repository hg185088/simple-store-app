import { Dispatch } from 'react';
import { CartAPI } from '../../api/cartApi';
import { selectCurrentUser } from '../auth/authReducer';
import { store, AppActions, AppState } from '../store';
import { CartActionEnum } from './models/actions';
import { Item } from '../../components';

export const getCart = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const user = selectCurrentUser(getState().auth);
    const cartAPI = new CartAPI();
    dispatch({ type: CartActionEnum.GET_CART_REQUEST });
    try {
      dispatch({
        type: CartActionEnum.GET_CART_SUCCESS,
        payload: {
          cart: (await cartAPI.getCart(user.id)).data,
        },
      });
    } catch (error) {
      dispatch({ type: CartActionEnum.GET_CART_FAILURE, payload: { error: error } });
    }
  };
};

export const createCart = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const user = selectCurrentUser(getState().auth);
    const cartAPI = new CartAPI();
    dispatch({ type: CartActionEnum.GET_CART_REQUEST });
    try {
      dispatch({
        type: CartActionEnum.GET_CART_SUCCESS,
        payload: {
          cart: (await cartAPI.createCart(user.id)).data,
        },
      });
    } catch (error) {
      dispatch({ type: CartActionEnum.GET_CART_FAILURE, payload: { error: error } });
    }
  };
};

export const addItemToCart = (item: Item) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const user = selectCurrentUser(getState().auth);
    const cartAPI = new CartAPI();
    dispatch({ type: CartActionEnum.GET_CART_REQUEST });
    try {
      dispatch({
        type: CartActionEnum.GET_CART_SUCCESS,
        payload: {
          cart: (await cartAPI.addItemToCart(user.id, item.id)).data,
        },
      });
    } catch (error) {
      dispatch({ type: CartActionEnum.GET_CART_FAILURE, payload: { error: error } });
    }
  };
};

export const deleteItemFromCart = (item: Item) => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const user = selectCurrentUser(getState().auth);
    const cartAPI = new CartAPI();
    dispatch({ type: CartActionEnum.GET_CART_REQUEST });
    try {
      dispatch({
        type: CartActionEnum.GET_CART_SUCCESS,
        payload: {
          cart: (await cartAPI.deleteItemFromCart(user.id, item.id)).data,
        },
      });
    } catch (error) {
      dispatch({ type: CartActionEnum.GET_CART_FAILURE, payload: { error: error } });
    }
  };
};

export const deleteCart = () => {
  return async (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const user = selectCurrentUser(getState().auth);
    const cartAPI = new CartAPI();
    dispatch({ type: CartActionEnum.GET_CART_REQUEST });
    try {
      dispatch({
        type: CartActionEnum.GET_CART_SUCCESS,
        payload: {
          cart: (await cartAPI.deleteCart(user.id)).data,
        },
      });
    } catch (error) {
      dispatch({ type: CartActionEnum.GET_CART_FAILURE, payload: { error: error } });
    }
  };
};
