import { CartWidget } from './CartWidget';
import '../styled/NavBar.scss';

export const NavBar = () => {
    const itemsNavBar = [
        {
            id: '01',
            name: 'inicio',
            subcategorias: [],
        },
        {
            id: '02',
            name: 'categorias',
            subcategorias: [
                {
                    id: '03',
                    name: 'hombre',
                    subcategorias: [
                        { id: '07', name: 'pantalones' },
                        { id: '08', name: 'remeras' },
                        { id: '09', name: 'calzado' },
                    ],
                },
                {
                    id: '04',
                    name: 'mujer',
                    subcategorias: [
                        { id: '10', name: 'remeras' },
                        { id: '11', name: 'pantalones' },
                        { id: '12', name: 'calzado' },
                        { id: '13', name: 'medias' },
                    ],
                },
                {
                    id: '05',
                    name: 'niño/a',
                    subcategorias: [
                        { id: '14', name: 'remeras' },
                        { id: '15', name: 'pantalones' },
                        { id: '16', name: 'medias' },
                    ],
                },
                {
                    id: '06',
                    name: 'accesorios',
                    subcategorias: [
                        { id: '17', name: 'gorras' },
                        { id: '18', name: 'riñoneras' },
                    ],
                },
            ],
        }
    ];

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
