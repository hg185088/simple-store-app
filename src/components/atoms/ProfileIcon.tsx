import React from 'react';
import style from '../../styles/profileIcon.module.css';

interface ProfileIconProps {
  firstInitial: string;
}

export const ProfileIcon = (props: ProfileIconProps) => {
  return (
    <div className={style.container}>
      <div className={style.text}>{props.firstInitial}</div>
    </div>
  );
};
