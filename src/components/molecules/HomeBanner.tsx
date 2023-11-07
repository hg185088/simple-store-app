import React, { useEffect, useRef, useState } from 'react';
import style from '../../styles/homeBanner.module.css';

export const HomeBanner = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const rotation = useRef('rotate(0deg)');

  useEffect(() => {
    rotation.current = isHover ? 'rotate(360deg)' : 'rotate(0deg)';
  }, [isHover]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleDiceDiceBaby = () => {
    window.open('https://www.youtube.com/watch?v=WPCE7mNd_H8');
  };
  return (
    <div className={style.container} onClick={handleDiceDiceBaby}>
      <div className={style.textLeft}>DI</div>
      <img
        src='./snakeEyes.jpeg'
        className={style.image}
        style={{ transform: rotation.current }}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      />
      <div className={style.textLeft}>CE</div>
    </div>
  );
};
