import { itemsNavBar } from '../data/itemsNavBar';
import { CartWidget } from './CartWidget';
import styles from '../styled/MobileNavBar.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.mobile_navbar__container}>
            <div className={styles.mobile_navbar__logo_container}>
                <Link to="/">
                    <h1 className={styles.mobile_navbar__logo_title}>CoderMarket</h1>
                </Link>
                <button className={styles.mobile_navbar__menu_button} onClick={toggleMenu}>
                    <span className={styles.menu_icon}>&#9776;</span> {/* Ícono de menú */}
                </button>
            </div>
            <ul className={`${styles.mobile_navbar__list} ${isOpen ? styles.open : ''}`}>
                <span className={styles.button__close} onClick={() => setIsOpen(false)}>&times;</span>
                {itemsNavBar.map(item => (
                    <li key={item.id} className={styles.mobile_navbar__item}>
                        <Link to={item.link} className={styles.mobile_navbar__link}>
                            {item.name}
                        </Link>
                        {item.subcategorias.length > 0 && (
                            <ul className={styles.mobile_navbar__sublist}>
                                {item.subcategorias.map(sub => (
                                    <li key={sub.id} className={styles.mobile_navbar__subitem}>
                                        <Link to={`/category/${sub.name}`} className={styles.mobile_navbar__sublink}>
                                            {sub.name}
                                        </Link>
                                        {sub.subcategorias?.length > 0 && (
                                            <ul className={styles.mobile_navbar__subsublist}>
                                                {sub.subcategorias.map(subsub => (
                                                    <li key={subsub.id} className={styles.mobile_navbar__subsubitem}>
                                                        <Link to={`/category/${sub.name}/${subsub.name}`} className={styles.mobile_navbar__subsublink}>
                                                            {subsub.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                                <CartWidget />
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
