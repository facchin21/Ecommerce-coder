import React, { useState } from 'react';
import { motion } from 'framer-motion';
import YellowImage from '../../assets/image/hero/rack-with-yellow.avif';
import ClotingImage from '../../assets/image/hero/clothing.avif';
import BigImage from '../../assets/image/hero/big-green.avif';
import SpringImage from '../../assets/image/hero/spring.avif';
import SummerImage from '../../assets/image/hero/summer.avif';
import ModerImage from '../../assets/image/hero/modern.avif';
import styles from '../../styled/HeroContainer.module.scss';
import FrameImage from '../../assets/image/Frame.png';
import FrameImageLeft from '../../assets/image/Frame-left.png';

const heroImages = [
    YellowImage,
    ClotingImage,
    BigImage,
    SpringImage,
    SummerImage,
    ModerImage,
];

export const HeroContainer = ({ title }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            (prevIndex - 1 + heroImages.length) % heroImages.length
        );
    };

    const handleDotClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className={styles.container_image}>
            <motion.div
                className={styles.image_wrapper}
                key={currentImageIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <img
                    src={heroImages[currentImageIndex]}
                    alt="Imagen del fondo en el Hero de la web"
                    className={styles.image__hero}
                />
            </motion.div>
            <img
                src={FrameImageLeft}
                alt="Imagen de Frame flecha apuntada a la izquierda"
                className={styles.image__frame_left}
                onClick={handlePrevImage}
            />
            <h1 className={styles.title__hero}>{title}</h1>
            <img
                src={FrameImage}
                alt="Imagen de Frame flecha apuntada a la derecha"
                className={styles.image__frame}
                onClick={handleNextImage}
            />

            {/* Indicadores */}
            <div className={styles.dots}>
                {heroImages.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};
