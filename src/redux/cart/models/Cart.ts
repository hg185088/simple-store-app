import { Item } from '../../../components';

export interface CartItem {
  isActive: boolean;
  id: number;
  item: Item;
}
