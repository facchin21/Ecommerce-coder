import styles from '../../styled/NavBar.module.scss'
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBarList = ({ items }) => {
    return (
        <ul className={styles.navbar__list}s>
            {items.map(item => (
                <li key={item.id} className={styles.navbar__item}>
                    <Link to={item.link} className={styles.navbar__link}>
                        {item.name}
                    </Link>
                    {item.subcategorias.length > 0 && (
                        <ul className={styles.navbar__sublist}>
                            {item.subcategorias.map(sub => (
                                <li key={sub.id} className={styles.navbar__subitem}>
                                    <Link to={`/category/${sub.name}`} className={styles.navbar__sublink}>
                                        {sub.name}
                                    </Link>
                                    {/* Submenú de subcategorías */}
                                    {sub.subcategorias?.length > 0 && (
                                        <ul className={styles.navbar__subsublist}>
                                            {sub.subcategorias.map(subsub => (
                                                <li key={subsub.id} className={styles.navbar__subsubitem}>
                                                    <Link to={`/category/${sub.name}/${subsub.name}`} className={styles.navbar__subsublink}>
                                                        {subsub.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};