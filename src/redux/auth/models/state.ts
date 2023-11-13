import { CurrentUser } from './CurrentUser';

export interface AuthState {
  user: CurrentUser;
  token: string;
}
