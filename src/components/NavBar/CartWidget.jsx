import styles from '../../styled/CartWidget.module.scss'
import { Cart } from '../../contexts/CartProvider'
import { FaShoppingCart } from "react-icons/fa"
import { useContext } from "react"

export const CartWidget = () => {
    const { quantityTotal, toggleCartVisibility } = useContext(Cart)

  return (
    <div className={styles.cart_widget}
    onClick={toggleCartVisibility}>
        <FaShoppingCart size={24} className={styles.cart__item} aria-label="Cart"/>
        <span className={styles.notification_badge}>{quantityTotal}</span>
    </div>
  )
}
