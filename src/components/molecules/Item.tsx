import React from 'react';
import style from '../../styles/Item.module.css';

export interface Item {
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ItemProps {
  item: Item;
  onClick?: () => void;
}

export const Item = (props: ItemProps) => {
  return (
    <div className={style.itemContainer} onClick={props.onClick ?? props.onClick}>
      <div className={style.imageContainer}>
        <img src={props.item.image} className={style.image}></img>
      </div>
      <div className={style.descriptionContainer}>{props.item.title}</div>
    </div>
  );
};
