import { Link } from 'react-router-dom'
import styles from '../styled/NotFound.module.scss'

export const NotFound = () => {
    return (

        <div className={styles.container__notFound}>
            <span className={styles.span__notFound}>Lo siento</span>
            <span>❌</span>
            <h1 className={styles.text__notFound}>
                No se pudo encontrar esta ruta.
            </h1>
            <span className={styles.span__volver}>Te sujerimos volver al inicio👇🏼</span>
            <Link to={'/'} className={styles.button__toHome}>
                Volver al Inicio
            </Link>
        </div>
    )
}