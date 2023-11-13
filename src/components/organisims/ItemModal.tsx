import React, { useEffect, useState } from 'react';
import { Item } from '..';
import style from '../../styles/itemModal.module.css';
import { ItemState } from '../../redux/item/models/state';
import { ItemActionType } from '../../redux/item/models/actions';
import { useItemReducer } from '../../redux/hooks/itemHook';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/appHooks';
import { addItemToCart, createCart } from '../../redux/cart/cartActions';
import { selectCart } from '../../redux/cart/cartReducer';

interface ItemModuleProps {
  item: Item;
  children: any;
}

export const ItemModal = () => {
  const appDispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const [itemState, dispatch] = useItemReducer({} as ItemState);
  const { isActive, item } = itemState;

  const handleExitModal = () => {
    dispatch({ type: ItemActionType.clearActiveItem });
  };

  const handleRickRoll = () => {
    window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0');
  };

  const handleAddItemToCart = () => {
    appDispatch(addItemToCart(item));
    alert('🛍️ Item added to cart!');
  };

  return isActive ? (
    <div className={style.container}>
      <div className={style.exit} onClick={handleExitModal}>
        {'X'}
      </div>
      <div className={style.top}>
        <Item item={item} />
        <ul className={style.bulletPoints}>
          <li>{`Price: $${item.price}`}</li>
          <li style={{ color: 'green' }}>{'In Stock'}</li>
          <div className={style.addToCartButton} onClick={handleAddItemToCart}>
            {'Add To Cart'}
          </div>
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
