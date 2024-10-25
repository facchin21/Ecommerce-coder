import styles from '../../styled/ContainerImageDetailItem.module.scss'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export const ContainerImageDetailItem = ({ product }) => {
    return(
        <div className={styles.container__image}>
            <div className={styles.container__image_three}>
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
                <img src={product?.pictureUrl} alt={`Imagen de ${product?.title}`} />
            </div>
            <div className={styles.container__image_large}>
                <Zoom>
                    <img src={product?.pictureUrl} 
                alt={`Imagen de ${product?.title}`} />
                </Zoom>
            </div>
        </div>
    )
}