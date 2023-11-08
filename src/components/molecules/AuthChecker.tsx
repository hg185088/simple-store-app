import React from 'react';
import { store, useAuthReducer } from '../../redux/store';
import { AuthState, selectCurrentUser } from '../../redux/authSlice';
import { NotAuthorized } from '../atoms/NotAuthorized';

interface AuthCheckerProps {
  public?: boolean;
  registerUserAccess?: boolean;
  children: React.ReactNode;
}

export const AuthChecker = (props: AuthCheckerProps) => {
  const [state, dispatch] = useAuthReducer({} as AuthState);
  const isRegisteredUser = state.user.email != '' ? true : false;

  if (props.registerUserAccess) {
    if (isRegisteredUser) {
      return <>{props.children}</>;
    } else {
      return <NotAuthorized />;
    }
  } else {
    return <>{props.children}</>;
  }
};
