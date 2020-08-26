import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { IState } from '../..';
import { ActionTypes } from './types';
import { addProductToCartRequest, addProductToCartSuccess, addProductToCartFailure } from './actions';
import api from '../../../services/api';

type ICheckProductStock = ReturnType<typeof addProductToCartRequest>;

interface IStockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: ICheckProductStock) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0;
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(api.get, `/stock/${product.id}`);

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.ADD_PRODUCT_REQUEST, checkProductStock),
]);
