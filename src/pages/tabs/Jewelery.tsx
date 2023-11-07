import React from 'react';
import { ItemList, Layout } from '../../components';
import { ItemModal } from '../../components/organisims/ItemModal';

export const Jewelery = () => {
  return (
    <Layout registeredUserAccess={true}>
      <ItemModal />
      <div className='page-container'>
        <ItemList query='?category=jewelery' />
      </div>
    </Layout>
  );
};
