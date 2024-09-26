import React, { useEffect, useState } from 'react'
import { products } from '../data/Mock.Products'
import '../styled/ItemList.scss'
import { Item } from './Item';
import { Loader } from './Loader';

export const ItemList = () => {
  const [allProducts, setAllProducts] = useState([])
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    const promiceProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (products.length > 0) {
          resolve(products);
        } else {
          reject("No se encontraron Productos.");
        }
      }, 2000);
    });

    promiceProducts
      .then((res) => {
        setAllProducts(res);
        setError('');
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      }).finally(() => {
        setLoading(false)
      })
  }, []);

  return (
    <>
      <header className='header__item'>
        <h1 className='header__title'>Todos los Productos</h1>
      </header>
      {loading &&
        <Loader />
      }
      <div className='container__list'>
        <>
          {allProducts.length > 0 ?
            allProducts?.map(product => (
              <Item key={product.id} product={product} />
            ))
            : (
              <span className='span__error'>No hay productos disponibles!</span>
            )
          }
        </>
      </div>
    </>
  )
}
