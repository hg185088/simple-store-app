import { Reducer } from 'redux';
import { Item } from '../../components';
import { useEffect, useState } from 'react';
import { ItemState } from './models/state';
import { ItemActionType, ItemActionUnion } from './models/actions';

const initialState: ItemState = {
  item: { category: '', description: '', image: '', price: 0, title: '', id: 0 },
  isActive: false,
};

export const itemReducer: Reducer<ItemState, ItemActionUnion> = (state = initialState, action) => {
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
