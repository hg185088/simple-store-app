import axios, { AxiosResponse } from 'axios';
import urlcat from 'urlcat';

import { store } from '../redux/store';

import { BASE_URL } from '../config';
import { AuthActionType } from '../redux/auth/models/actions';

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
export interface BadTokenError {
  message: string;
  statusCode: number;
}

export const getToken = async (user: LoginUser) => {
  try {
    return await axios.post(urlcat(BASE_URL, 'auth/login'), user);
  } catch (e) {
    console.log(e);
    throw Error('getToken failed');
  }
};

const getUser = async (user: LoginUser, token: string): Promise<AxiosResponse> => {
  try {
    const response = await axios
      .post(urlcat(BASE_URL, 'users/login'), user, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((e) => e.response);

    return response;
  } catch (e) {
    throw Error('getUser failed');
  }
};

export const createUser = async (user: CreateUser): Promise<AxiosResponse<string, any>> => {
  try {
    return await axios.post(urlcat(BASE_URL, '/users'), user);
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
        payload: { user: newUser.data, token },
      });

      return newUser;
    } else {
      store.dispatch({ type: AuthActionType.logout });
    }
  }
  return response;
};
