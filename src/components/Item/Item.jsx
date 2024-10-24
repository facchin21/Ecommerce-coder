import { useAuth } from '../../contexts/AuthProvider';
import styles from '../../styled/Item.module.scss'
import { ButtonEdit } from '../ButtonEdit';
import { Link } from 'react-router-dom'

export const Item = ({ product }) => {
  const { user } = useAuth();
  return (
    <>
      <Link to={`/item/${product.id}`}>
        <article key={product.id} className={styles.article__card}>
          <div className={styles.article__container_img}>
            <img src={product.pictureUrl}
              alt={product.title}
              className={styles.article__img} />
          </div>
          <div className={styles.article__container}>
            <h2 className={styles.article__title}>{product.title}</h2>
            <p className={styles.article__descripction}>{product.description}</p>
            <span className={styles.article__price}>${product.price}</span>
          </div>
          {user && (
            <div className={styles.container__button_edit}>
              <ButtonEdit product={product}/>
            </div>
          )}
        </article>
      </Link>
    </>
  )
}
