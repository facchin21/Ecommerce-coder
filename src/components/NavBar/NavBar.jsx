import { itemsNavBar } from '../../data/itemsNavBar'
import styles from '../../styled/NavBar.module.scss';
import { MobileNavBar } from '../NavBar/MobileNavBar'
import { useEffect, useState } from 'react';
import { CartWidget } from './CartWidget';
import { NavBarList } from './NavBarList'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    const [isMobile, setIsMobile] = useState(window.screen.width < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 820);
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return (
        <>
        {isMobile ? (
            <MobileNavBar/>
        ) :(
            <nav className={styles.navbar__container}>
                <div className={styles.navbar__logo_container}>
                    <Link to="/">
                        <h1 className={styles.navbar__logo_title}>CoderMarket</h1>
                    </Link>
                </div>
                <NavBarList items={itemsNavBar} /> {/* Usar el componente de listado */}
                <CartWidget />
            </nav>
            )}
        </>
    )
};
