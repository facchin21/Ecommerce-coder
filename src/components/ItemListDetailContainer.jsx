import { ContainerImageDetailItem } from './ContainerImageDetailItem';
import { ContainerTextDetailItem } from './ContainerTextDetailItem';
import React, { useEffect, useState } from 'react';
import styles from '../styled/ItemListDetailContainer.module.scss'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Loader } from './Loader';

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
          <ContainerImageDetailItem product={product} />
          <ContainerTextDetailItem product={product} />
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