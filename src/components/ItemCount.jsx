import { useState } from "react";
import '../styled/ItemCount.scss'
import { Modal } from "./Modal";

export const ItemCount = () => {
    const [count, setCount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const stock = 5;

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

    return (
        <>
            <div className="container__count">
                <span className="count__decrement" onClick={onDecrement}> - </span>
                <span>
                    <span>{count}</span>
                </span>
                <span className="count__increment" onClick={onAdd}> + </span>
            </div>
            <button className="button__count-add">Agregar al Carrito</button>

            {showModal && (
                <Modal
                    message={`No puedes agregar más de ${stock} productos.`}
                    onClose={closeModal}
                />
            )}
        </>
    )
}