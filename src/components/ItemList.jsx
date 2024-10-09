import React from 'react'
import { Loader } from './Loader';
import '../styled/ItemList.scss'
import { Item } from './Item';

export const ItemList = ({ products, loading }) => {
  return (
    <>
      <header className='header__item'>
        <h1 className='header__title'>Todos los Productos</h1>
      </header>
      {loading && <Loader />}
      <div className='container__list'>
        {products.length > 0 ? ( // Corregido aquí
          products.map(product => (
            <Item key={product.id} product={product} />
          ))
        ) : (
          <span className='span__error'>No hay productos disponibles!</span>
        )}
      </div>
    </>
  )
}
