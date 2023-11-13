import React from 'react';
import style from '../../styles/Item.module.css';

export interface Item {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ItemProps {
  item: Item;
  style?: any;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const Item = (props: ItemProps) => {
  return (
    <div
      className={style.itemContainer}
      onClick={props.onClick}
      style={props.style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <div className={style.imageContainer}>
        <img src={props.item.image} className={style.image}></img>
      </div>
      <div className={style.descriptionContainer}>{props.item.title}</div>
    </div>
  );
};
