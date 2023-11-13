import React, { useState } from 'react';
import { ProfileIcon } from '../atoms/ProfileIcon';
import { ProfileCard } from '../atoms/ProfileCard';
import style from '../../styles/profileAccordian.module.css';

export const ProfileModal = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div onClick={handleToggle}>
      <ProfileIcon />
      <div className={style.toggleContainer}>{toggle ? <ProfileCard /> : <></>}</div>
    </div>
  );
};
