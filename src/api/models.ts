export enum ErrorEnum {
  NO_ACTIVE_CART = 'User does not have active cart',
}

export interface ErrorMessage {
  statusCode: number;
  message: ErrorEnum;
}
