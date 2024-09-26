import React from 'react'

export const Item = ({product}) => {
  /*Object to print
  {
    id: 1,
    title: "Remera básica blanca",
    description: "Remera de algodón 100%, ideal para el día a día.",
    price: 3500,
    pictureUrl: "https://via.placeholder.com/150/FFFFFF?text=Remera+Blanca",
  }*/

  return (
    <article key={product.id}>
      <div>
        <img src={product.pictureUrl} alt={product.title}/>
      </div>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <span>{product.price}</span>
      </div>
    </article>
  )
}
