import { createStore } from 'redux';
import { authReducer } from '.';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { AuthState } from './authSlice';
import { ItemState, itemReducer } from './itemSlice';
import { useEffect, useState } from 'react';

const persistConfig = {
  key: 'auth',
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

export const pReducer = persistReducer<AuthState>(persistConfig, authReducer);

export const authStore = createStore(pReducer, composeWithDevTools());
export const persistor = persistStore(authStore);

export const itemStore = createStore(itemReducer, composeWithDevTools());

export const useItemStore = () => {
  const [state, setState] = useState(itemStore.getState());

  useEffect(() => {
    const unsubscribe = itemStore.subscribe(() => {
      setState(itemStore.getState());
    });

    // Cleanup subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);

  return state;
};

export const useAuth = () => {
  const [state, setState] = useState(authStore.getState());

  useEffect(() => {
    const unsubscribe = authStore.subscribe(() => {
      setState(authStore.getState());
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return state;
};
