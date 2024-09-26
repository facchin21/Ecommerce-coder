import { itemsNavBar } from '../data/itemsNavBar';
import { CartWidget } from './CartWidget';
import '../styled/MobileNavBar.scss';
import { useState } from 'react';

export const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='mobile-navbar__container'>
            <div className='mobile-navbar__logo-container'>
                <h1 className='mobile-navbar__logo-title'>CoderMarket</h1>
                <button className='mobile-navbar__menu-button' onClick={toggleMenu}>
                    <span className='menu-icon'>&#9776;</span> {/* Ícono de menú */}
                </button>
            </div>
            <ul className={`mobile-navbar__list ${isOpen ? 'open' : ''}`}>
                <span className='button__close' onClick={() => setIsOpen(false)}>&times;</span>
                {itemsNavBar.map(item => (
                    <li key={item.id} className='mobile-navbar__item'>
                        <a href={item.name} className='mobile-navbar__link'>
                            {item.name}
                        </a>
                        {item.subcategorias.length > 0 && (
                            <ul className='mobile-navbar__sublist'>
                                {item.subcategorias.map(sub => (
                                    <li key={sub.id} className='mobile-navbar__subitem'>
                                        <a href={sub.name} className='mobile-navbar__sublink'>
                                            {sub.name}
                                        </a>
                                        {sub.subcategorias?.length > 0 && (
                                            <ul className='mobile-navbar__subsublist'>
                                                {sub.subcategorias.map(subsub => (
                                                    <li key={subsub.id} className='mobile-navbar__subsubitem'>
                                                        <a href={subsub.name} className='mobile-navbar__subsublink'>
                                                            {subsub.name}
                                                        </a>
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
