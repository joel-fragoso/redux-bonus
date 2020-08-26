import { IProduct } from "./types";

export const addProductToCart = (product: IProduct) => {
  return {
    type: '@cart/ADD_PRODUCT',
    payload: {
      product,
    },
  };
};
