import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import '../styled/ItemListContainer.scss'
import { ItemList } from './ItemList'
import { Loader } from './Loader'

export const ItemListContainer = ({ greeting }) => {
  const { allProducts, loading } = useFetch()
  const [products, setProducts] = useState([])
  const { categoryId, subcategoryId } = useParams()

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

  if (loading) {
    return (
      <div style={{ position: 'absolute', top: '40%', right: '45%' }}>
        <Loader />
      </div>
    );
  }

  return (
    <div className="ItemList__container">
      <h1>Bienvenidos a <span>{greeting}</span> !!</h1>
      <ItemList products={products} loading={loading} />
    </div>
  )
}
