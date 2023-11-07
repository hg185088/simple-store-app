import React from 'react';
import { Item } from '..';
import { ItemProps } from './Item';
import { itemStore } from '../../redux/store';
import { ItemActionType } from '../../redux/itemSlice';

interface ActivatableItemProps {
  item: Item;
}

export const ActivatableItem = (props: ActivatableItemProps) => {
  const handleActivateItem = () => {
    itemStore.dispatch({
      type: ItemActionType.setActiveItem,
      payload: { isActive: true, item: props.item },
    });
  };

  return <Item item={props.item} onClick={handleActivateItem} />;
};
