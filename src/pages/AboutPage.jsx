import { Link } from 'react-router-dom';
import styles from '../styled/About.module.scss';

export const AboutPage = () => {
    return (
        <section className={styles.about__container}>
            <h1 className={styles.about__title}>Pagina en mantenimiento👷🏼</h1>
            <h2 className={styles.about__subtitle}>Lo siento vuelve a intentar mas tarde</h2>
            <Link to='/'
            className={styles.about__button}>Volver al home</Link>
        </section>
    );
};
