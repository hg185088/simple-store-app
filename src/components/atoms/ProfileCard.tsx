import React from 'react';
import style from '../../styles/profileAccordian.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../../redux/auth/models/state';
import { AuthActionType } from '../../redux/auth/models/actions';
import { useAuthReducer } from '../../redux/hooks/authHook';

export const ProfileCard = () => {
  const [auth, dispatch] = useAuthReducer({} as AuthState);
  const navigation = useNavigate();

  const handleAdmin = () => {
    alert('feature unavailable');
  };

  const handleCart = () => {
    navigation('/cart');
  };

  const handleLogOut = () => {
    dispatch({ type: AuthActionType.logout });
    navigation('/auth/login');
  };

  const handleLogIn = () => {
    navigation('/auth/login');
  };

  return auth.user.email ? (
    <div className={style.cardContainer}>
      <div className={style.boxContainer} onClick={handleAdmin}>
        Admin
      </div>
      <div className={style.boxContainer} onClick={handleCart}>
        Cart
      </div>
      <div className={style.boxContainer} onClick={handleLogOut}>
        Log Out
      </div>
    </div>
  ) : (
    <div className={style.cardContainer}>
      <div className={style.boxContainer} onClick={handleLogIn}>
        Log In
      </div>
    </div>
  );
};
const Box = (props: { tab: string }) => <div className={style.boxContainer}>{props.tab}</div>;
