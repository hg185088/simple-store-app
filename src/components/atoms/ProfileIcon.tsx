import React from 'react';
import style from '../../styles/profileAccordian.module.css';
import Person2Icon from '@mui/icons-material/Person2';
import { AuthState } from '../../redux/auth/models/state';
import { useAuthReducer } from '../../redux/hooks/authHook';

export const ProfileIcon = () => {
  const [auth, dispatch] = useAuthReducer({} as AuthState);
  const initials = auth.user.name[0];
  return (
    <div className={style.iconContainer}>
      <div className={style.text}>{initials ?? <Person2Icon />}</div>
    </div>
  );
};
