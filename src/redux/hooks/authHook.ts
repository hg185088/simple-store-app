import { Dispatch } from 'redux';
import { AuthState } from '../auth/models/state';
import { useState, useEffect } from 'react';
import { AppActions, store } from '../store';

export const useAuthReducer = (initial: AuthState): [AuthState, Dispatch<AppActions>] => {
  const [state, setState] = useState(store.getState().auth);
  const dispatch = store.dispatch;

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState().auth);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return [state, dispatch] ?? [initial, dispatch];
};
