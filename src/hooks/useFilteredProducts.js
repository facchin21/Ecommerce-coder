import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from './useFetch';

export const useFilteredProducts = () => {
  const { allProducts, loading } = useFetch();
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  
  const { categoryId, subcategoryId } = useParams();

  useEffect(() => {
    if (!allProducts.length) return;

    const productsFilter = allProducts
      .filter(product =>
        !categoryId || product.category?.toLowerCase() === categoryId.toLowerCase()
      )
      .filter(product =>
        !subcategoryId || product.subcategory?.toLowerCase() === subcategoryId.toLowerCase()
      );

    setProducts(productsFilter);
  }, [categoryId, subcategoryId, allProducts]);

  useEffect(() => {
    if (loading) return;

    let newMessage = '';

    if (subcategoryId) {
      newMessage = `Listado de ${subcategoryId.charAt(0).toUpperCase() + subcategoryId.slice(1)} de ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`;
    } else if (categoryId) {
      newMessage = `Listado de productos de ${categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}`;
    } else {
      newMessage = 'Todos los productos disponibles';
    }

    if (products.length === 0) {
      setMessage('No se encontraron productos que coincidan con su búsqueda');
    } else {
      setMessage(newMessage);
    }
  }, [loading, products, allProducts.length, categoryId, subcategoryId]);

  return { products, message, loading };
};