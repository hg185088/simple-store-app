import React, { useState } from 'react';
import { Layout } from '../components';
import { getUserWithReauth } from '../api/userApi';
import { authStore } from '../redux/store';
import { AuthActionType } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState<string>('hg');
  const [password, setPassword] = useState<string>('123');
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await getUserWithReauth({ username, password });

    navigate('/');
  };

  return (
    <Layout headerOff={true}>
      <div className='auth-form-container'>
        <form className='auth-form'>
          <div className='auth-form-content'>
            <h1 className='auth-form-title'>Sign In</h1>
            <div>
              <label>Username</label>
              <input
                placeholder='enter username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                placeholder='enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button type='submit' onClick={handleSubmit}>
                Submit
              </button>
            </div>
            <div>
              <a href='/auth/signUp'>Sign up</a>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
