import { useEffect } from 'react';
import { ItemList, Layout } from '../../components';
import { ItemModal } from '../../components/organisims/ItemModal';
import { getActiveCart } from '../../api/cartApi';
import { useAuthReducer } from '../../redux/store';
import { AuthState } from '../../redux/authSlice';

export const Electronics = () => {
  return (
    <Layout registeredUserAccess={true}>
      <ItemModal />
      <div className='page-container'>
        <ItemList query='?category=electronics' />
      </div>
    </Layout>
  );
};
