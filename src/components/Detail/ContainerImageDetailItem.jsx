import styles from '../../styled/ContainerImageDetailItem.module.scss'

export const ContainerImageDetailItem = ({ product }) => {
    return(
        <div className={styles.container__image}>
            <div className={styles.container__image_three}>
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
            </div>
            <div className={styles.container__image_large}>
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
            </div>
        </div>
    )
}