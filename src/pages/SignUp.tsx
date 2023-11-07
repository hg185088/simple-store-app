import React, { useState } from 'react';
import { Layout } from '../components';
import { createUser } from '../api';

export const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    const response = await createUser({ name, email, username, password });
    console.log(response.data);
  };

  return (
    <Layout headerOff={true}>
      <div className='auth-form-container'>
        <form className='auth-form'>
          <div className='auth-form-content'>
            <h1 className='auth-form-title'>Sign Up</h1>
            <div>
              <label>Name</label>
              <input
                placeholder='enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type='email'
                placeholder='enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
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
              <a href='/auth/login'>Login</a>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
