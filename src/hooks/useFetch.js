import { useEffect, useState } from "react";
import { products } from '../data/Mock.Products'

export function useFetch () {
    const [allProducts, setAllProducts] = useState([])
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true);
    const promiceProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (products.length > 0) {
          resolve(products);
        } else {
          reject("No se encontraron Productos.");
        }
      }, 2000);
    });

    promiceProducts
      .then((res) => {
        setAllProducts(res);
        setError('');
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      }).finally(() => {
        setLoading(false)
      })
  }, []);
    return{ allProducts, error, loading }
}