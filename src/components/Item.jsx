import { Link } from 'react-router-dom'
import '../styled/Item.scss'
import React from 'react'

export const Item = ({ product }) => {

  return (
    <>
      <Link to={`/item/${product.id}`}>
        <article key={product.id} className='article__card'>
          <div className='article__container-img'>
            <img src={product.pictureUrl}
              alt={product.title}
              className='article__img' />
          </div>
          <div className='article__container'>
            <h2 className='article__title'>{product.title}</h2>
            <p className='article__descripction'>{product.description}</p>
            <span className='article__price'>${product.price}</span>
          </div>
        </article>
      </Link>
    </>
  )
}
