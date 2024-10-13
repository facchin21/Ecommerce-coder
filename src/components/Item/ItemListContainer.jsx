import { useFilteredProducts } from '../../hooks/useFilteredProducts';
import styles from '../../styled/ItemListContainer.module.scss';
import { ItemList } from './ItemList';
import { Loader } from '../Loader';

export const ItemListContainer = ({ greeting }) => {
  const { products, message, loading } = useFilteredProducts();

  if (loading) {
    return (
      <div style={{ position: 'absolute', top: '40%', right: '45%' }}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.ItemList__container}>
      <h1>Bienvenidos a <span>{greeting}</span> !!</h1>
      <ItemList
        products={products}
        loading={loading}
        message={message} />
    </div>
  );
};
