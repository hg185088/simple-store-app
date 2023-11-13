import { ErrorEnum } from '../../../api/models';
import { CartItem } from './Cart';

export interface CartState {
  processing?: boolean;
  cart?: CartItem[];
  error?: any;
}
