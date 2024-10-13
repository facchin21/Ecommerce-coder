import { Link } from 'react-router-dom';
import styles from '../styled/Contact.module.scss';

export const ContactPage = () => {
    return (
        <section className={styles.contact__container}>
            <section className={styles.contact__container}>
                <h1 className={styles.contact__title}>Pagina en mantenimiento👷🏼</h1>
                <h2 className={styles.contact__subtitle}>Lo siento vuelve a intentar mas tarde</h2>
                <Link to='/'
                    className={styles.contact__button}>Volver al home</Link>
            </section>
        </section>
    );
};
