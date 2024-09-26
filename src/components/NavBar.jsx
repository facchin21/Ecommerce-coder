import { itemsNavBar } from '../data/itemsNavBar'
import { useEffect, useState } from 'react';
import { CartWidget } from './CartWidget';
import { MobileNavBar } from './MobileNavBar'
import { NavBarList } from './NavBarList'
import '../styled/NavBar.scss';

export const NavBar = () => {
    const [isMobile, setIsMobile] = useState(window.screen.width < 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth > 768)
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
            <nav className='navbar__container'>
                <div className='navbar__logo-container'>
                    <h1 className='navbar__logo-title'>CoderMarket</h1>
                </div>
                <NavBarList items={itemsNavBar} /> {/* Usar el componente de listado */}
                <CartWidget />
            </nav>
            )}
        </>
    )
};
