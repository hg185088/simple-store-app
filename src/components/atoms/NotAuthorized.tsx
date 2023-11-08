import React from 'react';
import '../../styles/auth.css';
import style from '../../styles/NotAuthorized.module.css';
import { useNavigate } from 'react-router-dom';

export const NotAuthorized = () => {
  const navigation = useNavigate();

  return (
    <div className={style.container}>
      <h1>Not Authorized</h1>
      <div>
        <div>Have and Account? </div>
        <div className={style.hyperlink} onClick={() => navigation('/auth/login')}>
          Log in
        </div>
      </div>
      <div>
        <div>Want to create an Account? </div>
        <div className={style.hyperlink} onClick={() => navigation('/auth/signup')}>
          Sign up
        </div>
      </div>
    </div>
  );
};
