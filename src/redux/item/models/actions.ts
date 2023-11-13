import { ItemState } from './state';

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

export type ItemActionUnion = SetActiveItemAction | ClearActiveItemAction;
