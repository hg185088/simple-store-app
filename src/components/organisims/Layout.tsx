import React, { useState } from 'react';
import '../../styles/auth.css';
import '../../styles/header.css';
import '../../styles/layout.css';
import { AuthChecker } from '../molecules/AuthChecker';
import { useNavigate } from 'react-router-dom';
import { ProfileModal } from '../molecules/ProfileModal';
import { useAuthReducer } from '../../redux/hooks/authHook';

interface LayoutProps {
  registeredUserAccess?: boolean;
  children: any;
  headerOff?: boolean;
}

interface CategoryProps {
  name: string;
  endpoint: string;
}

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const navigation = useNavigate();
  const [auth, dispatch] = useAuthReducer({} as any);
  const [initials, setInitials] = useState<string>(auth.user.name.charAt(0));
  const title = 'dice';

  const categories = [
    { name: 'all', endpoint: '/' },
    { name: 'electronics', endpoint: '/electronics' },
    { name: 'jewelry', endpoint: '/jewelry' },
    { name: "men's clothing", endpoint: '/mensclothing' },
    { name: "women's clothing", endpoint: '/womensclothing' },
  ];

  return (
    <div className='container'>
      {props.headerOff ? (
        <></>
      ) : (
        <div className='header-container'>
          <div className='header-top'>
            <h1 className='header-title'>{title}</h1>
            <div className='header-profile'>
              <ProfileModal />
            </div>
          </div>
          <div className='header-nav-container'>
            {categories.map((value) => (
              <Category name={value.name} endpoint={value.endpoint} />
            ))}
          </div>
        </div>
      )}
      <div>
        <AuthChecker registerUserAccess={props.registeredUserAccess}>{props.children}</AuthChecker>
      </div>
      <div className='footer-container'>
        <h2>By Hunter Giles</h2>
        <h3>(770) 111-1111</h3>
        <h4>hg185088@ncr.com</h4>
      </div>
    </div>
  );
};

const Category = (props: CategoryProps) => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation(props.endpoint);
  };

  return (
    <div className='header-category' onClick={handleClick}>
      <h3>{props.name}</h3>
    </div>
  );
};
