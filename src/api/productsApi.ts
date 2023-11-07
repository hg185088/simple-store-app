import axios from 'axios';
import urlcat from 'urlcat';
import { authStore } from '../redux/store';
import { getToken } from '.';
import { GetTokenResponse } from './userApi';
import { AuthActionType } from '../redux/authSlice';
import { Item } from '../components/molecules/Item';
const BASE_URL = 'http://127.0.0.1:3000';

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
  const { user, token } = authStore.getState();
  const response = await getAllProducts(token, query);

  if (response?.status === 401) {
    const getTokenResponse = await getToken(user);
    const token = (getTokenResponse.data as GetTokenResponse).access_token;

    if (getTokenResponse.data) {
      authStore.dispatch({
        type: AuthActionType.setCredentials,
        payload: { token },
      });

      return await getAllProducts(token, query);
    } else {
      authStore.dispatch({ type: AuthActionType.logout });
    }
  }
  return response;
};
