import axios from 'axios';
import urlcat from 'urlcat';
import { store } from '../redux/store';
import { getToken } from '.';
import { GetTokenResponse } from './userApi';
import { AuthActionType } from '../redux/authSlice';
import { BASE_URL } from '../config';

const getAllProducts = async (token: string, query: string = '') => {
  const url = urlcat(BASE_URL, `/store/products${query}`);

  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (e) {
    throw Error('getAllProducts failed');
  }
};

export const getAllProductsWithReauth = async (query: string = '') => {
  const { user, token } = store.getState().auth;
  const response = await getAllProducts(token, query);

  if (response?.status === 401) {
    const getTokenResponse = await getToken(user);
    const token = (getTokenResponse.data as GetTokenResponse).access_token;

    if (getTokenResponse.data) {
      store.dispatch({
        type: AuthActionType.setCredentials,
        payload: { user, token },
      });
      return await getAllProducts(token, query);
    } else {
      store.dispatch({ type: AuthActionType.logout });
    }
  }
  return response;
};
