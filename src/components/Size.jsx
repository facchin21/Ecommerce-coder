import styles from '../styled/Size.module.scss'

export const Size = ({ size }) => {
    return(
        <div className={styles.size__container}>
            <span>{size}</span>
        </div>
    )
}