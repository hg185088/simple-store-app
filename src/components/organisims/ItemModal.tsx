import React, { useEffect, useState } from 'react';
import { Item } from '..';
import style from '../../styles/itemModal.module.css';
import { itemStore, useItemStore } from '../../redux/store';
import {
  ItemActionType,
  itemReducer,
  selectActiveItem,
  selectIsActive,
} from '../../redux/itemSlice';

interface ItemModuleProps {
  item: Item;
  children: any;
}

export const ItemModal = () => {
  const { isActive, item } = useItemStore();

  const handleExitModal = () => {
    itemStore.dispatch({ type: ItemActionType.clearActiveItem });
  };

  const handleRickRoll = () => {
    window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0');
  };

  return isActive ? (
    <div className={style.container}>
      <div className={style.exit} onClick={handleExitModal}>
        X
      </div>
      <div className={style.top}>
        <Item item={item} />
        <ul className={style.bulletPoints}>
          <li>{`Price: $${item.price}`}</li>
          <li style={{ color: 'green' }}>{'In Stock'}</li>
          <div className={style.addToCartButton}>{'Add To Cart'}</div>
        </ul>
      </div>
      <div className={style.bottom}>
        <div>{'Description:'}</div>
        {item.description}
        <div className={style.removeLoyalty}>
          <div className={style.removeLoyaltyText} onClick={handleRickRoll}>
            {'Remove Loyalty Customer'}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
