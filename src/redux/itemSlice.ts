import { Reducer } from 'redux';
import { Item } from '../components';
import { useEffect, useState } from 'react';

export interface ItemState {
  item: Item;
  isActive: boolean;
}

export enum ItemActionType {
  setActiveItem = 'item/setActiveItem',
  clearActiveItem = 'item/clearActiveItem',
}

interface SetActiveItemAction {
  type: ItemActionType.setActiveItem;
  payload: ItemState;
}

interface ClearActiveItemAction {
  type: ItemActionType.clearActiveItem;
}

const initialState: ItemState = {
  item: { category: '', description: '', image: '', price: 0, title: '' },
  isActive: false,
};

export const itemReducer: Reducer<ItemState, SetActiveItemAction | ClearActiveItemAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ItemActionType.setActiveItem: {
      const { item, isActive } = action.payload;
      return { ...state, item, isActive };
    }
    case ItemActionType.clearActiveItem: {
      const { item, isActive } = initialState;
      return { ...state, item, isActive };
    }
    default:
      return state;
  }
};

export const selectActiveItem = (state: ItemState) => state.item;
export const selectIsActive = (state: ItemState) => state.isActive;
