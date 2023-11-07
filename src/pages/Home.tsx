import React from 'react';
import '../styles/home.css';
import { HomeBanner, ItemCarousel, Layout } from '../components';

export const Home = () => {
  return (
    <Layout registeredUserAccess={true}>
      <div className='home-container'>
        <div className='home-main-window'>
          <HomeBanner />
        </div>
        <div className='home-bottom-carousel'>
          <ItemCarousel />
        </div>
      </div>
    </Layout>
  );
};
