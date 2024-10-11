import React from 'react'
import { Loader } from './Loader';
import styles from '../styled/ItemList.module.scss'
import { Item } from './Item';

export const ItemList = ({ products, loading }) => {
  return (
    <>
      <header className={styles.header__item}>
        <h1 className={styles.header__title}>Todos los Productos</h1>
      </header>
      {loading && <Loader />}
      <div className={styles.container__list}>
        {products.length > 0 ? (
          products.map((product, index) => (  // Asegúrate de incluir el índice aquí
            <Item key={`${product.id}-${index}`} product={product} />
          ))
        ) : (
          <span className={styles.span__error}>No hay productos disponibles!</span>
        )}
      </div>
    </>
  );
};
