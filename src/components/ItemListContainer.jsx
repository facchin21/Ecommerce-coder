import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useEffect, useState } from 'react'
import '../styled/ItemListContainer.scss'
import { ItemList } from './ItemList'
import { Loader } from './Loader'

export const ItemListContainer = ({ greeting }) => {
  const { allProducts, loading } = useFetch()
  const [products, setProducts] = useState([])
  const { categoryId, subCategoryId } = useParams()

  useEffect(() => {
    let productsFilter = allProducts;

    if (categoryId) {
      productsFilter = productsFilter.filter(product => 
        product.category.toLowerCase() === categoryId.toLowerCase()
      );
    }
    
    if (subCategoryId) {
      productsFilter = productsFilter.filter(product => 
        product.subcategory.toLowerCase() === subCategoryId.toLowerCase()
      );
    }

    setProducts(productsFilter);
  }, [categoryId, subCategoryId, allProducts]);

  if (loading) {
    return (
        <div style={{position : 'absolute' , top: '40%', right : '45%'}}>
          <Loader/>
        </div>
    )
  }

  return (
    <div className="ItemList__container">
      <h1>Bienvenidos a <span>{greeting}</span> !!</h1>
      <ItemList products={products} loading={loading}/>
    </div>
  )
}
