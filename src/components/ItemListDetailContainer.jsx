import { ContainerImageDetailItem } from './ContainerImageDetailItem';
import { ContainerTextDetailItem } from './ContainerTextDetailItem';
import React, { useEffect, useState } from 'react';
import '../styled/ItemListDetailContainer.scss'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

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

  console.log(product);

  return (
    <article className='container'>
      <ContainerImageDetailItem product={product} />
      <ContainerTextDetailItem product={product} />
    </article>
  );
}