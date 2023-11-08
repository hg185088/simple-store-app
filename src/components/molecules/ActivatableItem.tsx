import React from 'react';
import { Item } from '..';
import { ItemActionType } from '../../redux/itemSlice';
import { useAuthReducer } from '../../redux/store';
import { AuthState } from '../../redux/authSlice';

interface ActivatableItemProps {
  item: Item;
}

export const ActivatableItem = (props: ActivatableItemProps) => {
  const [auth, dispatch] = useAuthReducer({} as AuthState);

  const handleActivateItem = () => {
    dispatch({
      type: ItemActionType.setActiveItem,
      payload: { isActive: true, item: props.item },
    });
  };

  return <Item item={props.item} onClick={handleActivateItem} />;
};
