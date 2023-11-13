import { Reducer } from 'redux';
import { AuthState } from './models/state';
import { AuthActionType, AuthActionUnion } from './models/actions';

const initialState: AuthState = {
  user: { username: '', password: '', id: '', name: '', email: '' },
  token: '',
};

export const authReducer: Reducer<AuthState, AuthActionUnion> = (state = initialState, action) => {
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
