import React, { useState } from 'react';
import { Item } from '..';
import { AuthState } from '../../redux/auth/models/state';
import { ItemActionType } from '../../redux/item/models/actions';
import { useAuthReducer } from '../../redux/hooks/authHook';
import style from '../../styles/Item.module.css';

interface ActivatableItemProps {
  item: Item;
}

export const ActivatableItem = (props: ActivatableItemProps) => {
  const [auth, dispatch] = useAuthReducer({} as AuthState);

  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = {
    backgroundColor: 'rgb(200, 230, 200)',
  };

  const handleActivateItem = () => {
    dispatch({
      type: ItemActionType.setActiveItem,
      payload: { isActive: true, item: props.item },
    });
  };

  return (
    <div className={style.activatableItem}>
      <Item
        item={props.item}
        onClick={handleActivateItem}
        style={isHovered ? hoverStyle : {}}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
};
