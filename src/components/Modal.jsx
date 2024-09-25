import '../styled/Modal.scss'

export const Modal = ({message, onClose}) =>{
    return(
        <div className='modal__backdrop'>
            <div className='modal__content'>
                <p>{message}</p>
                <button onClick={onClose}
                className='modal__close'>Cerrar</button>
            </div>
        </div>
    )
}