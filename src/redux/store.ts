import { combineReducers, createStore } from 'redux';
import { authReducer } from '.';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { AuthState } from './authSlice';
import { ItemState, itemReducer } from './itemSlice';
import { Dispatch, useEffect, useState } from 'react';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({ auth: authReducer, item: itemReducer });
const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, composeWithDevTools());
export const persistor = persistStore(store);

export const useItemReducer = (initial: ItemState): [ItemState, Dispatch<any>] => {
  const [state, setState] = useState<ItemState>(store.getState().item);
  const dispatch = store.dispatch;

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

export const useAuthReducer = (initial: AuthState): [AuthState, Dispatch<any>] => {
  console.log('from ', store.getState().auth);
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
