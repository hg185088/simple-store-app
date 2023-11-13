import React from 'react';
import { Layout } from '../components';
import { CartItemList } from '../components/organisims/CartItemList';

export const Cart = () => {
  return (
    <Layout registeredUserAccess={true}>
      <div className='page-container'>
        <CartItemList />
      </div>
    </Layout>
  );
};
