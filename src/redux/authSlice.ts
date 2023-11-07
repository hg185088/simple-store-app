import { Reducer } from 'redux';

export interface CurrentUser {
  id: string;
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface AuthState {
  user: CurrentUser;
  token: string;
}

const initialState: AuthState = {
  user: { username: '', password: '', id: '', name: '', email: '' },
  token: '',
};

export enum AuthActionType {
  setCredentials = 'auth/setCredentials',
  logout = 'auth/logOut',
}

interface SetCredentialsAction {
  type: AuthActionType.setCredentials;
  payload: AuthState;
}

interface LogOutAction {
  type: AuthActionType.logout;
}

export const authReducer: Reducer<AuthState, SetCredentialsAction | LogOutAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case AuthActionType.setCredentials: {
      const { user, token } = action.payload;
      return { ...state, user, token };
    }
    case AuthActionType.logout: {
      const { user, token } = initialState;
      return { ...state, user, token };
    }
    default:
      return state;
  }
};

export const selectCurrentUser = (state: AuthState) => state.user;
export const selectCurrentToken = (state: AuthState) => state.token;
