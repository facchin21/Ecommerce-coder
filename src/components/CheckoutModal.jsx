import React, { useState } from 'react';
import styles from '../styled/CheckountModal.module.scss';
import { toast } from 'react-toastify';

export const CheckoutModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({ name: '', email: '', emailConfirm: '', address: '', phone: '' });
    const [order, setOrder] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (formData.email !== formData.emailConfirm) {
            toast.error('Los emails no coinciden');
            return;
        }
        try {
            const newOrder = await onSubmit(formData);
            setOrder(newOrder);
        } catch (error) {
            toast.error('Hubo un error al procesar la orden');
        }
        onClose()
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h2 className={styles.subtitle}>Finalizar Compra</h2>
                <form className={styles.form}>
                    <label className={styles.label}>
                        Nombre:
                        <input type="text" name="name" value={formData.name} 
                        onChange={handleChange} required className={styles.input} />
                    </label>
                    <label className={styles.label}>
                        Email:
                        <input type="email" name="email" value={formData.email} 
                        onChange={handleChange} required className={styles.input} />
                    </label>
                    <label className={styles.label}>
                        Confirmar Email:
                        <input type="email" name="emailConfirm" value={formData.emailConfirm} 
                        onChange={handleChange} required className={styles.input} />
                    </label>
                    <label className={styles.label}>
                        Dirección:
                        <input type="text" name="address" value={formData.address} 
                        onChange={handleChange} required className={styles.input} />
                    </label>
                    <label className={styles.label}>
                        Teléfono:
                        <input type="text" name="phone" value={formData.phone} 
                        onChange={handleChange} required className={styles.input} />
                    </label>
                    <button type="button" onClick={handleSubmit} className={styles.button}>Enviar</button>
                    <button type="button" onClick={onClose} className={styles.cancelButton}>Cancelar</button>
                </form>
            </div>
        </div>
    );
};

