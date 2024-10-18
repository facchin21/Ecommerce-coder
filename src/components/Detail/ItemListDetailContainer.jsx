import { ContainerImageDetailItem } from '../Detail/ContainerImageDetailItem';
import { ContainerTextDetailItem } from '../Detail/ContainerTextDetailItem';
import styles from '../../styled/ItemListDetailContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader';

export const ItemListDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { allProducts } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    if (id && allProducts) {
      const productFilter = allProducts.find(p => p.id === Number(id));
      if (productFilter) {
        setProduct(productFilter);
      } else {
        setProduct(null);
      }
    } else {
      setProduct(null);
    }
  }, [id, allProducts]);

  return (
    <article className={styles.container}>
      {product ? (
        <>
        <div className={styles.container__product}>
          <ContainerImageDetailItem product={product} />
          <ContainerTextDetailItem product={product} />
        </div>
        <div className={styles.container__description}>
            <h1>Detalles del producto</h1>
            <p>{product.description}</p>
        </div>
        </>
        ):
      (
        <div style={{ position: 'absolute', top: '40%', right: '45%' }}>
          <Loader/>
        </div>
      )}
    </article>
  );
}