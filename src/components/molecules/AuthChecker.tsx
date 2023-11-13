import React from 'react';
import { store } from '../../redux/store';
import { NotAuthorized } from '../atoms/NotAuthorized';
import { AuthState } from '../../redux/auth/models/state';
import { useAuthReducer } from '../../redux/hooks/authHook';

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
