import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../../store/modules/cart/types';
import { addProductToCart } from '../../store/modules/cart/actions';

interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductToCart = useCallback(() => {
    dispatch(addProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span> {' '}
      <button
        type="button"
        onClick={handleProductToCart}
      >
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
