import React from 'react'
import styles from '../styled/ContainerTextDetailItem.module.scss'
import { PaymentMethod } from './PaymentMethod'
import { ItemCount } from './ItemCount'

export const ContainerTextDetailItem = ({ product }) => {
    return (
        <div className={styles.container__item}>
            <h1 className={styles.item__title}>{product?.title}</h1>
            <h2 className={styles.item__price}>${product?.price}</h2>
            {/* Modal de medios de Pago */}
            <PaymentMethod/>
            <div className={styles.container__talles}>
                <div className={styles.container__talle}>
                    <span>XS</span>
                </div>
                <div className={styles.container__talle}>
                    <span>S</span>
                </div>
                <div className={styles.container__talle}>
                    <span>M</span>
                </div>
                <div className={styles.container__talle}>
                    <span>L</span>
                </div>
            </div>
            <div className={styles.container__ItemCount}>
                <ItemCount/>
            </div>
        </div>
    )
}
