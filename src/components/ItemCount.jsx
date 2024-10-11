import { useState } from "react";
import styles from '../styled/ItemCount.module.scss'
import { ModalError } from "./ModalError";
import { toast, ToastContainer } from "react-toastify";

export const ItemCount = ({ stock }) => {
    console.log("STOCK", {stock})
    const [count, setCount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const onAdd = () => {
        if (count < stock) {
            setCount(prevCount => prevCount + 1);
        } else {
            setShowModal(true);
        }
    };

    const onDecrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const addToCart = () => {
        
    }
    return (
        <>
            <span>Cantidad:</span>
            <div className={styles.container__count}>
                <span className={styles.count__decrement} onClick={onDecrement}> - </span>
                <span>
                    <span>{count}</span>
                </span>
                <span className={styles.count__increment} onClick={onAdd}> + </span>
            </div>
            <button className={styles.button__count_add}
            onClick={addToCart}>Agregar al Carrito</button>

            {showModal && (
                <ModalError
                    message={`No puedes agregar más de ${stock} productos.`}
                    onClose={closeModal}
                />
            )}
        </>
    )
}