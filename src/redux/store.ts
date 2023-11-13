import { applyMiddleware, combineReducers, createStore } from 'redux';
import { authReducer } from '.';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './cart/cartReducer';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { CartActionUnion } from './cart/models/actions';
import { AuthActionUnion } from './auth/models/actions';
import { itemReducer } from './item/itemReducer';
import { ItemActionUnion } from './item/models/actions';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({ auth: authReducer, item: itemReducer, cart: cartReducer });
export type AppState = ReturnType<typeof rootReducer>;
export type AppActions = ItemActionUnion | AuthActionUnion | CartActionUnion;
const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)),
);
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;