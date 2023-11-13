import React, { useEffect, useState } from 'react';
import { Loading } from '../atoms/Loading';
import { ActivatableItem } from '../molecules/ActivatableItem';
import style from '../../styles/cart.module.css';
import { createCart, deleteCart, deleteItemFromCart, getCart } from '../../redux/cart/cartActions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/appHooks';
import { selectCart, selectCartItems } from '../../redux/cart/cartReducer';
import { Item } from '../molecules/Item';
import { RemoveItemButton } from '../atoms/RemoveItemButton';

export const CartItemList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const cart = useAppSelector(selectCart);
  const cartItems = useAppSelector(selectCartItems);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(getCart());

    setIsLoading(false);
  }, []);

  const handleCheckout = () => {
    appDispatch(deleteCart());
    alert('🛒 Your order has been received!');
  };

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className={style.container}>
        {cartItems.length >= 1 ? (
          cartItems.map((value) => (
            <div>
              <Item item={value.item} />
              <RemoveItemButton item={value.item} />
            </div>
          ))
        ) : (
          <div>{'Add Items To Cart!'}</div>
        )}
        {cartItems.length >= 1 ? (
          <div className={style.checkout} onClick={handleCheckout}>
            Checkout
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
};
