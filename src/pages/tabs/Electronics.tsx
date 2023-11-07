import { ItemList, Layout } from '../../components';
import { ItemModal } from '../../components/organisims/ItemModal';

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
