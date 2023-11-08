import axios from 'axios';
import urlcat from 'urlcat';
import { AuthActionType } from '../redux/authSlice';
import { store } from '../redux/store';

import { BASE_URL } from '../config';

export interface BaseUser {
  username: string;
}

export interface CreateUser {
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface LoginUser {
  username: string;
  password: string;
}

export interface GetTokenResponse {
  access_token: string;
}

export const getToken = async (user: LoginUser) => {
  try {
    return await axios.post(urlcat(BASE_URL, 'auth/login'), user);
  } catch {
    throw Error('getToken failed');
  }
};

const getUser = async (user: LoginUser, token: string) => {
  try {
    return await axios
      .post(urlcat(BASE_URL, 'users/login'), user, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => error.response);
  } catch (e) {
    throw Error('getUser failed');
  }
};

export const createUser = async (user: CreateUser) => {
  try {
    const response = await axios.post(urlcat(BASE_URL, '/users'), user);
    return response;
  } catch (e) {
    throw Error('create User failed');
  }
};

export const getUserWithReauth = async (user: LoginUser) => {
  const response = await getUser(user, store.getState().auth.token);

  if (response?.status === 401) {
    const getTokenResponse = await getToken(user);
    const token = (getTokenResponse.data as GetTokenResponse).access_token;

    if (getTokenResponse.data) {
      const newUser = await getUser(user, token);

      store.dispatch({
        type: AuthActionType.setCredentials,
        payload: { user: newUser, token },
      });

      return newUser;
    } else {
      store.dispatch({ type: AuthActionType.logout });
    }
  }
  return response;
};
