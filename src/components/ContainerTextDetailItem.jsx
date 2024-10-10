import React from 'react'
import '../styled/ContainerTextDetailItem.scss'

export const ContainerTextDetailItem = ({ product }) => {
    return (
        <div className='container__item'>
            <h1 className='item__title'>{product?.title}</h1>
            <h2 className='item__price'>${product?.price}</h2>
            {/* Hay que crear el componente con el modal👇🏼 */}
            <span className='item__pagos'>Medios de pago</span>
            <div className='container__talles'>
                <div className='container__talle'>
                    <span>XS</span>
                </div>
                <div className='container__talle'>
                    <span>S</span>
                </div>
                <div className='container__talle'>
                    <span>M</span>
                </div>
                <div className='container__talle'>
                    <span>L</span>
                </div>
            </div>
            <button className='button__add-cart'>Agregar al Carrito</button>
        </div>
    )
}
