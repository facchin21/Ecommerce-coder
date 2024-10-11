import styles from '../styled/ModalError.module.scss'


export const ModalError = ({message, onClose}) =>{
    return(
        <div className={styles.modal__backdrop}>
            <div className={styles.modal__content}>
                <p>{message}</p>
                <button onClick={onClose}
                className={styles.modal__close}>Cerrar</button>
            </div>
        </div>
    )
}