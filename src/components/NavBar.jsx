import { itemsNavBar } from '../data/itemsNavBar'
import { CartWidget } from './CartWidget';
import '../styled/NavBar.scss';

export const NavBar = () => {
    return (
        <nav className='navbar__container'>
            <div className='navbar__logo-container'>
                <h1 className='navbar__logo-title'>CoderMarket</h1>
            </div>
            <ul className='navbar__list'>
                {itemsNavBar.map(item => (
                    <li key={item.id} className='navbar__item'>
                        <a href={item.name} className='navbar__link'>
                            {item.name}
                        </a>
                        {item.subcategorias.length > 0 && (
                            <ul className='navbar__sublist'>
                                {item.subcategorias.map(sub => (
                                    <li key={sub.id} className='navbar__subitem'>
                                        <a href={sub.name} className='navbar__sublink'>
                                            {sub.name}
                                        </a>
                                        {/* Submenú de subcategorías */}
                                        {sub.subcategorias?.length > 0 && (
                                            <ul className='navbar__subsublist'>
                                                {sub.subcategorias.map(subsub => (
                                                    <li key={subsub.id} className='navbar__subsubitem'>
                                                        <a href={subsub.name} className='navbar__subsublink'>
                                                            {subsub.name}
                                                        </a>
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
            <CartWidget />
        </nav>
    );
};
