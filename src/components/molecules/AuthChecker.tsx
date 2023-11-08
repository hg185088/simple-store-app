import React from 'react';
import { authStore } from '../../redux/store';
import { selectCurrentUser } from '../../redux/authSlice';
import { NotAuthorized } from '../atoms/NotAuthorized';

interface AuthCheckerProps {
  public?: boolean;
  registerUserAccess?: boolean;
  children: React.ReactNode;
}

export const AuthChecker = (props: AuthCheckerProps) => {
  const user = selectCurrentUser(authStore.getState());
  const isRegisteredUser = user.email != '' ? true : false;

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
