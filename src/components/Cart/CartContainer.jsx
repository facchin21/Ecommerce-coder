import { handleSubmitOrder } from '../../services/CreateOrder'
import styles from '../../styled/CartContainer.module.scss'
import { useContext, useEffect, useState } from "react"
import { Cart } from "../../contexts/CartProvider"
import { CheckoutModal } from '../CheckoutModal'
import { toast } from 'react-toastify';
import { ItemCart } from './ItemCart'

export const CartContainer = () => {
    const { cart, clearCart, isVisible, toggleCartVisibility, totalPrice, quantityTotal } = useContext(Cart)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        toggleCartVisibility();
    };

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isVisible]);


    const handleOpenModal = () => {
        if (cart.length > 0) {
            setIsModalOpen(true);
        } else {
            toast.error('No hay productos en el carrito');
        }
    };

    const handleOrderSubmit = async (orderData) => {
        await handleSubmitOrder(orderData, cart, totalPrice, clearCart);
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={`${styles.cart__container} ${isVisible ? styles.cart__visible : ''}`}>
                <button className={styles.cart__button_closed} onClick={toggleMenu}>
                    <span className={styles.menu_icon}>&times;</span> {/* Ícono de x */}
                </button>
                <div className={styles.cart__container_items}>
                    {cart.length === 0 ? (
                        <p className={styles.cart__message}>No hay productos en el carrito.</p>
                    ) : (
                        cart.map(product => (
                            <ItemCart key={product.id} product={product} />
                        ))
                    )}
                </div>
                <div className={styles.total__container_count}>
                    <h2 className={styles.total__count_title}>Productos totales: {quantityTotal}</h2>
                </div>
                <div className={styles.container__total}>
                    <h2 className={styles.total__subtitle}>Total:</h2>
                    <span className={styles.total__price}>${totalPrice.toLocaleString('es-AR')}</span>
                </div>
                <div className={styles.container__button}>
                    <button className={styles.button__buy} onClick={handleOpenModal}>Finalizar compra</button>
                </div>
            </div>
            <CheckoutModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleOrderSubmit}
            />
        </>
    )
}