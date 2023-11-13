import { AuthState } from './state';

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

export type AuthActionUnion = SetCredentialsAction | LogOutAction;
