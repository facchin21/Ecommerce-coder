import styles from '../../styled/ItemList.module.scss'
import { Loader } from '../Loader';
import { Item } from './Item';
import React from 'react'

export const ItemList = ({ products, loading, message }) => {
  return (
    <>
      <header className={styles.header__item}>
        <h1 className={styles.header__title}>{message}</h1>
      </header>
      {loading && <Loader />}
      <div className={styles.container__list}>
        {products.length > 0 ? (
          products.map(product => ( 
            <Item key={`${product.id}`} product={product} />
          ))
        ) : (
          <span className={styles.span__error}>No hay productos disponibles!</span>
        )}
      </div>
    </>
  );
};
