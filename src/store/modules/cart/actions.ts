import { IProduct, ActionTypes } from "./types";

export const addProductToCartRequest = (product: IProduct) => {
  return {
    type: ActionTypes.ADD_PRODUCT_REQUEST,
    payload: {
      product,
    },
  };
};

export const addProductToCartSuccess = (product: IProduct) => {
  return {
    type: ActionTypes.ADD_PRODUCT_SUCCESS,
    payload: {
      product,
    },
  };
};

export const addProductToCartFailure = (productId: number) => {
  return {
    type: ActionTypes.ADD_PRODUCT_FAILURE,
    payload: {
      productId,
    },
  };
};
