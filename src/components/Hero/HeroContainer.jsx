import FrameImageLeft from '../../assets/image/Frame-left.png'
import styles from '../../styled/HeroContainer.module.scss'
import FrameImage from '../../assets/image/Frame.png'
import HeroImage from '../../assets/image/hero.png'
import React from 'react'

export const HeroContainer = ({ title }) => {
    return (
        <div className={styles.container_image}>
            <img src={HeroImage} alt="Imagen del fondo en el Hero de la web"
                className={styles.image__hero} />
            <img src={FrameImageLeft}
                alt="Imagen de Frame flecha apuntado a la  izquierda"
                className={styles.image__frame_left} />
            <h1 className={styles.title__hero}>{title}</h1>
            <img src={FrameImage}
                alt="Imagen de Frame flecha apuntado a la  Derecha"
                className={styles.image__frame} />
        </div>
    )
}
