// ItemCount.jsx
import styles from '../../styled/ItemCount.module.scss';
import { useContext, useEffect, useState } from "react";
import { Cart } from '../../contexts/CartProvider';
import { ModalError } from "../ModalError";
import { toast } from "react-toastify";

export const ItemCount = ({ stock, selectSize, product }) => {
    const [count, setCount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [stockDisponible, setStockDisponible] = useState(0);
    const { addCart } = useContext(Cart);

    useEffect(() => {
        if (selectSize && product.sizes) {
            const sizeObj = product.sizes.find(item => item.size === selectSize);
            setStockDisponible(sizeObj ? sizeObj.stock : 0);
            setCount(0);
        }
    }, [selectSize, product]);

    const onAdd = () => {
        if (!selectSize) {
            toast.info("Por favor, selecciona un talle antes de elegir la cantidad");
        } else {
            if (count < stockDisponible) {
                setCount(prevCount => prevCount + 1);
            } else {
                setShowModal(true);
            }
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
        if (!selectSize) {
            toast.info(`Por favor, selecciona un talle antes de agregar al carrito`);
        } else if (count === 0) {
            toast.info(`Por favor, selecciona la cantidad que deseas comprar`);
        } else {
            addCart(product, count, selectSize); 
        }
    };

    return (
        <>
            <span>Cantidad:</span>
            <div className={styles.container__count}>
                <span className={styles.count__decrement} onClick={onDecrement}> - </span>
                <span>{count}</span>
                <span className={styles.count__increment} onClick={onAdd}> + </span>
            </div>
            <button className={styles.button__count_add} onClick={addToCart}>Agregar al Carrito</button>

            {showModal && (
                <ModalError
                    message={`No puedes agregar más de ${stockDisponible} productos.`}
                    onClose={closeModal}
                />
            )}
        </>
    );
};
