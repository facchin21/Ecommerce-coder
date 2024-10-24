import React from 'react'
import styles from '../styled/ButtonEdit.module.scss';
import { Link } from 'react-router-dom';

export const ButtonEdit = ({ product }) => {
  return (
    <Link to={`/dashboard/edit/${product.id}`} className={styles.button}>
        Editar producto
    </Link>
  )
}
