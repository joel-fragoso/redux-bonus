export enum ActionTypes {
  ADD_PRODUCT_REQUEST = '@cart/ADD_PRODUCT_REQUEST',
  ADD_PRODUCT_SUCCESS = '@cart/ADD_PRODUCT_SUCCESS',
  ADD_PRODUCT_FAILURE = '@cart/ADD_PRODUCT_FAILURE',
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: number[];
}
