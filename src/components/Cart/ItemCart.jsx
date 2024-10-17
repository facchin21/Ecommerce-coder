import { useContext } from 'react';
import styles from '../../styled/ItemCart.module.scss';
import { FaTrash, FaPlusCircle } from 'react-icons/fa';
import { Cart } from '../../contexts/CartProvider';

export const ItemCart = ({ product }) => {
  const { addCart, removeCartItem } = useContext(Cart);

  const addItemCart = () => {
    addCart(product, 1, product.sizeSelect)
  }
  const removeItemCart = () => {
    removeCartItem(product.id)
  }

  return (
    <article className={styles.item__container}>
      <div className={styles.item__container_image}>
        <img src={product.pictureUrl}
          alt={`Imagen de ${product.title}`}
          className={styles.item__image} />
      </div>
      <div className={styles.item__container_text}>
        <h2 className={styles.item__title}>{product.title}</h2>
        <p className={styles.item__description}>{product.description}</p>
        <h3 className={styles.item__price}>${product.price}</h3>
      </div>
      <div className={styles.item__container_size}>
        <h2 className={styles.item__title_size}>Talle:</h2>
        <span className={styles.item__size}>{product.sizeSelect}</span>
      </div>
      <div className={styles.item__container_actions}>
        <FaTrash className={styles.faTrash}
          onClick={removeItemCart} />
        <span className={styles.item__quantity}>{product.quantity}</span>
        <FaPlusCircle className={styles.faPlusCircle}
          onClick={addItemCart} />
      </div>
    </article>
  )
}