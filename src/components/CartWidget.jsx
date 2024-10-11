import styles from '../styled/CartWidget.module.scss'
import { FaShoppingCart } from "react-icons/fa"
import { useState } from "react"

export const CartWidget = () => {
    const [amount, setAmount] = useState(1)

  return (
    <div className={styles.cart_widget}>
        <FaShoppingCart size={24} className={styles.cart__item} aria-label="Cart"/>
        <span className={styles.notification_badge}>{amount}</span>
    </div>
  )
}
