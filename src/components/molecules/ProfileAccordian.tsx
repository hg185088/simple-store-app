import React from 'react';
import style from '../../styles/profileAccordian.module.css';

export const ProfileAccordian = () => {
  const tabs = ['profile', 'Cart', 'Log out'];
  const toggle = true;

  return toggle ? (
    <div className={style.container}>
      {tabs.map((tab) => (
        <Box tab={tab} />
      ))}
    </div>
  ) : (
    <></>
  );
};
const Box = (props: { tab: string }) => <div className={style.boxContainer}>{props.tab}</div>;
