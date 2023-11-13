import { BASE_URL } from '../config';
import { store } from '../redux/store';
import axios from 'axios';
import urlcat from 'urlcat';
import { GetTokenResponse, getToken } from './userApi';
import { AuthActionType } from '../redux/auth/models/actions';
import { ErrorEnum } from './models';

export class CartAPI {
  constructor() {}
  static config = (token: string) => {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
  };

  async checkOrGetToken(): Promise<string> {
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
  }

  async createCart(userId: string) {
    const token = await this.checkOrGetToken();
    const url = urlcat(BASE_URL, `/cart/create`);

    const response = await axios.post(url, { userId }, CartAPI.config(token));

    if (response.status === 401) {
      const retryToken = await this.checkOrGetToken();
      return await axios.post(url, { userId }, CartAPI.config(retryToken)).catch((e) => e.response);
    }

    return response;
  }

  async deleteCart(userId: string) {
    const token = await this.checkOrGetToken();
    const url = urlcat(BASE_URL, `/cart/delete/${userId}`);

    const response = await axios.delete(url, CartAPI.config(token));

    if (response.status === 401) {
      const refreshToken = await this.checkOrGetToken();
      return await axios.delete(url, CartAPI.config(refreshToken));
    }

    return response;
  }

  async addItemToCart(userId: string, itemId: number) {
    const token = await this.checkOrGetToken();
    const url = urlcat(BASE_URL, `/cart/item/add`);

    const response = await axios.post(url, { userId, itemId }, CartAPI.config(token));

    if (response.status === 401) {
      const refreshToken = await this.checkOrGetToken();
      return await axios.post(url, { userId, itemId }, CartAPI.config(refreshToken));
    }

    // if (response.status === 404 && response.data.message === ErrorEnum.NO_ACTIVE_CART) {
    //   return await this.createCart(userId);
    // }
    return response;
  }

  async deleteItemFromCart(userId: string, itemId: number) {
    const token = await this.checkOrGetToken();
    const url = urlcat(BASE_URL, `/cart/item/delete/${userId}/${itemId}`);

    const response = await axios.delete(url, CartAPI.config(token));

    if (response.status === 401) {
      const refreshToken = await this.checkOrGetToken();
      return await axios.delete(url, CartAPI.config(refreshToken));
    }

    return response;
  }

  async getCart(userId: string) {
    const token = await this.checkOrGetToken();
    const url = urlcat(BASE_URL, `/cart/getactivecart`);

    const response = await axios.post(url, { userId }, CartAPI.config(token));

    if (response.status === 401) {
      const refreshToken = await this.checkOrGetToken();
      return await axios.post(url, { userId }, CartAPI.config(refreshToken));
    }

    // if (response.status === 404 && response.data.message === ErrorEnum.NO_ACTIVE_CART) {
    //   return await this.createCart(userId);
    // }
    return response;
  }

  // private checkErrorStatus(error: { statusCode: number; message: string }) {
  //   if (error.statusCode != 404) {
  //     return;
  //   }
  //   switch (error.message) {
  //     case 'User does not have active cart':
  //       throw new Error('User does not have active cart');
  //   }
  // }
}
