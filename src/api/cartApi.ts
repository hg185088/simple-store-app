import { BASE_URL } from '../config';
import { store } from '../redux/store';
import axios from 'axios';
import urlcat from 'urlcat';
import { GetTokenResponse, getToken } from './userApi';
import { AuthActionType } from '../redux/authSlice';

const config = (token: string) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};

const checkOrGetToken = async (): Promise<string> => {
  const { user, token } = store.getState().auth;
  const url = urlcat(BASE_URL, `/auth/profile`);

  try {
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response.status === 401) {
      const getTokenResponse = await getToken(user);
      const token = (getTokenResponse.data as GetTokenResponse).access_token;

      if (getTokenResponse.data) {
        store.dispatch({
          type: AuthActionType.setCredentials,
          payload: { user, token },
        });
      }
      return token;
    }
    return token;
  } catch (e) {
    throw Error('checkOrGetToken failed');
  }
};

export const createCart = async (userId: string) => {
  const token = await checkOrGetToken();
  const url = urlcat(BASE_URL, `/cart/create`);

  const response = await axios.post(url, { userId }, config(token));

  if (response.status === 401) {
    const retryToken = await checkOrGetToken();
    return await axios.post(url, { userId }, config(retryToken));
  }

  return response;
};

export const deleteCart = async (userId: string) => {
  const token = await checkOrGetToken();
  const url = urlcat(BASE_URL, `/cart/delete/${userId}`);

  const response = await axios.delete(url, config(token));

  if (response.status === 401) {
    const refreshToken = await checkOrGetToken();
    return await axios.delete(url, config(refreshToken));
  }

  return response;
};

export const addItemToCart = async (userId: string, itemId: string) => {
  const token = await checkOrGetToken();
  const url = urlcat(BASE_URL, `/cart/item/add`);

  const response = await axios.post(url, { userId, itemId }, config(token));

  if (response.status === 401) {
    const refreshToken = await checkOrGetToken();
    return await axios.post(url, { userId, itemId }, config(refreshToken));
  }

  return response;
};

export const deleteItemFromCart = async (userId: string, itemId: string) => {
  const token = await checkOrGetToken();
  const url = urlcat(BASE_URL, `/cart/item/delete/${userId}/${itemId}`);

  const response = await axios.delete(url, config(token));

  if (response.status === 401) {
    const refreshToken = await checkOrGetToken();
    return await axios.delete(url, config(refreshToken));
  }

  return response;
};

export const getActiveCart = async (userId: string) => {
  const token = await checkOrGetToken();
  const url = urlcat(BASE_URL, `/cart/getactivecart`);

  const response = await axios.post(url, { userId }, config(token));

  if (response.status === 401) {
    const refreshToken = await checkOrGetToken();
    return await axios.post(url, { userId }, config(refreshToken));
  }

  return response;
};
