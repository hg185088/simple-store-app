import React from 'react';
import { ItemList, Layout } from '../../components';
import { ItemModal } from '../../components/organisims/ItemModal';

export const MensClothing = () => {
  return (
    <Layout registeredUserAccess={true}>
      <ItemModal />
      <div className='page-container'>
        <ItemList query="?category=men's clothing" />
      </div>
    </Layout>
  );
};
