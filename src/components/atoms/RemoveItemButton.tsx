import React from 'react';
import { Item } from '../molecules/Item';
import { useAppDispatch } from '../../redux/hooks/appHooks';
import style from '../../styles/cart.module.css';
import { deleteItemFromCart } from '../../redux/cart/cartActions';

interface RemoveItemButtonProps {
  item: Item;
}

export const RemoveItemButton = (props: RemoveItemButtonProps) => {
  const appDispatch = useAppDispatch();

  return (
    <div className={style.button} onClick={() => appDispatch(deleteItemFromCart(props.item))}>
      {'Remove Item'}
    </div>
  );
};
