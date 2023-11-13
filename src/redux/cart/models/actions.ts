import { CartState } from './state';

export enum CartActionEnum {
  CREATE_CART_REQUEST = 'CREATE_CART_REQUEST',
  CREATE_CART_SUCCESS = 'CREATE_CART_SUCCESS',
  CREATE_CART_FAILURE = 'CREATE_CART_FAILURE',
  DELETE_CART_REQUEST = 'DELETE_CART_REQUEST',
  DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS',
  DELETE_CART_FAILURE = 'DELETE_CART_FAILURE',
  ADD_ITEM_TO_CART_REQUEST = 'ADD_ITEM_TO_CART_REQUEST',
  ADD_ITEM_TO_CART_SUCCESS = 'ADD_ITEM_TO_CART_SUCCESS',
  ADD_ITEM_TO_CART_FAILURE = 'ADD_ITEM_TO_CART_FAILURE',
  DELETE_ITEM_FROM_CART_REQUEST = 'DELETE_ITEM_FROM_CART_REQUEST',
  DELETE_ITEM_FROM_CART_SUCCESS = 'DELETE_ITEM_FROM_CART_SUCCESS',
  DELETE_ITEM_FROM_CART_FAILURE = 'DELETE_ITEM_FROM_CART_FAILURE',
  GET_CART_REQUEST = 'GET_CART_REQUEST',
  GET_CART_SUCCESS = 'GET_CART_SUCCESS',
  GET_CART_FAILURE = 'GET_CART_FAILURE',
}

interface CartActionCreateRequest {
  type: CartActionEnum.CREATE_CART_REQUEST;
}
interface CartActionCreateSuccess {
  type: CartActionEnum.CREATE_CART_SUCCESS;
  payload: CartState;
}
interface CartActionCreateFail {
  type: CartActionEnum.CREATE_CART_FAILURE;
  payload: CartState;
}
interface CartActionDeleteRequest {
  type: CartActionEnum.DELETE_CART_REQUEST;
}
interface CartActionDeleteSuccess {
  type: CartActionEnum.DELETE_CART_SUCCESS;
  payload: CartState;
}
interface CartActionDeleteFail {
  type: CartActionEnum.DELETE_CART_FAILURE;
  payload: CartState;
}
interface CartActionAddItemRequest {
  type: CartActionEnum.ADD_ITEM_TO_CART_REQUEST;
}
interface CartActionAddItemSuccess {
  type: CartActionEnum.ADD_ITEM_TO_CART_SUCCESS;
  payload: CartState;
}
interface CartActionAddItemFail {
  type: CartActionEnum.ADD_ITEM_TO_CART_FAILURE;
  payload: CartState;
}
interface CartActionDeleteItemRequest {
  type: CartActionEnum.DELETE_ITEM_FROM_CART_REQUEST;
}
interface CartActionDeleteItemSuccess {
  type: CartActionEnum.DELETE_ITEM_FROM_CART_SUCCESS;
  payload: CartState;
}
interface CartActionDeleteItemFail {
  type: CartActionEnum.DELETE_ITEM_FROM_CART_FAILURE;
  payload: CartState;
}
interface CartActionGetCartRequest {
  type: CartActionEnum.GET_CART_REQUEST;
}
interface CartActionGetCartSuccess {
  type: CartActionEnum.GET_CART_SUCCESS;
  payload: CartState;
}
interface CartActionGetCartFail {
  type: CartActionEnum.GET_CART_FAILURE;
  payload: CartState;
}
export type CartActionUnion =
  | CartActionGetCartFail
  | CartActionGetCartSuccess
  | CartActionGetCartRequest
  | CartActionDeleteItemFail
  | CartActionDeleteItemSuccess
  | CartActionDeleteItemRequest
  | CartActionAddItemFail
  | CartActionAddItemSuccess
  | CartActionAddItemRequest
  | CartActionDeleteFail
  | CartActionDeleteSuccess
  | CartActionDeleteRequest
  | CartActionCreateFail
  | CartActionCreateSuccess
  | CartActionCreateRequest;
