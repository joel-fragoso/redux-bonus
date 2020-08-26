import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../../store/modules/cart/types';
import { addProductToCart } from '../../store/modules/cart/actions';
import api from '../../services/api';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('/products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  const handleProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product));
  }, [dispatch]);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span> {' '}
          <button
            type="button"
            onClick={() => handleProductToCart(product)}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
