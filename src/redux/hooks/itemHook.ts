import { Dispatch } from 'redux';
import { ItemState } from '../item/models/state';
import { AppActions, store } from '../store';
import { useState, useEffect } from 'react';

export const useItemReducer = (initial: ItemState): [ItemState, Dispatch<AppActions>] => {
  const [state, setState] = useState<ItemState>(store.getState().item);
  const dispatch = store.dispatch;
  const a = store.getState;
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState().item);
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return [state, dispatch] ?? [initial, dispatch];
};
