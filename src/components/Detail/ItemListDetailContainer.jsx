import { ContainerImageDetailItem } from '../Detail/ContainerImageDetailItem';
import { ContainerTextDetailItem } from '../Detail/ContainerTextDetailItem';
import styles from '../../styled/ItemListDetailContainer.module.scss';
import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { Loader } from '../Loader';

export const ItemListDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const productRef = doc(db, 'productos', id); // Referencia al documento por ID
          const productSnap = await getDoc(productRef); // Obtener el documento

          if (productSnap.exists()) {
            setProduct({ id: productSnap.id, ...productSnap.data() }); // Establecer el producto en el estado
          } else {
            setProduct(null); // No existe el producto
          }
        } catch (error) {
          console.error('Error al obtener el producto:', error);
          setProduct(null); // Manejo de error
        }
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <article className={styles.container}>
      {product ? (
        <>
          <div className={styles.container__products}>
            <div className={styles.container__product}>
              <ContainerImageDetailItem product={product} />
              <ContainerTextDetailItem product={product} />
            </div>
          </div>
          <div className={styles.container__description}>
            <h1>Detalles del producto</h1>
            <p>{product.description}</p>
          </div>
        </>
      ) : (
        <div style={{ position: 'absolute', top: '40%', right: '45%' }}>
          <Loader />
        </div>
      )}
    </article>
  );
};
