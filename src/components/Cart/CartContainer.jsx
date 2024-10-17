import styles from '../../styled/CartContainer.module.scss'
import { Cart } from "../../contexts/CartProvider"
import { useContext } from "react"
import { ItemCart } from './ItemCart'

export const CartContainer = () => {
    const { cart, isVisible, toggleCartVisibility, totalPrice, quantityTotal } = useContext(Cart)

    const toggleMenu = () => {
        toggleCartVisibility();
    };

    return (
        <div className={`${styles.cart__container} ${isVisible ? styles.cart__visible : ''}`}>
            <button className={styles.cart__button_closed} onClick={toggleMenu}>
                <span className={styles.menu_icon}>&times;</span> {/* Ícono de x */}
            </button>
            <div className={styles.cart__container_items}>
                {cart.length === 0 ? (
                    <p className={styles.cart__message}>No hay productos en el carrito.</p>
                ) : (
                    cart.map(product => (
                        <ItemCart key={product.id} product={product}/>
                    ))
                )}
            </div>
            <div className={styles.container__total}>
                <h2>Productos totales: {quantityTotal}</h2>
                <h2 className={styles.total__subtitle}>Total:</h2>
                <span className={styles.total__price}>${totalPrice}</span>
            </div>
            <div className={styles.container__button}>
                <button className={styles.button__buy}>Pagar Aqui</button>
            </div>
        </div>
    )
}