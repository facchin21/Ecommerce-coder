import styles from '../../styled/ContainerTextDetailItem.module.scss'
import React, { useEffect, useState } from 'react'
import { PaymentMethod } from './PaymentMethod'
import { ItemCount } from './ItemCount'
import { Size } from './Size'

export const ContainerTextDetailItem = ({ product }) => {
    const [ sizes, setSizes ] = useState([])
    const [ selectSize, setSelectSize ] = useState(false) 
    
    useEffect(() => {
        if(product?.sizes){
            setSizes(product.sizes);
        }
    },[product])


    return (
        <div className={styles.container__item}>
            <h1 className={styles.item__title}>{product?.title}</h1>
            <h2 className={styles.item__price}>${product?.price}</h2>
            
            {/* Modal de medios de Pago */}
            <PaymentMethod/>

            {/* Talles */}
            <div className={styles.container__talles}>
                <span className={styles.span__talle}>Talles:</span>
                {sizes.map((size, key) => (
                    <Size size={size} key={key}
                    selectSize={selectSize}
                    setSelectSize={setSelectSize}/>
                ))}
            </div>
            
            {/* Componente para agregar al carrito y ademas saber cuantos */}
            <div className={styles.container__ItemCount}>
                <ItemCount stock={product?.stock}
                 selectSize={selectSize}
                 product={product}/>
            </div>
        </div>
    )
}
