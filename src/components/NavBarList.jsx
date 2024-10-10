import React from 'react';
import { Link } from 'react-router-dom';

export const NavBarList = ({ items }) => {
    return (
        <ul className='navbar__list'>
            {items.map(item => (
                <li key={item.id} className='navbar__item'>
                    <Link to={item.link} className='navbar__link'>
                        {item.name}
                    </Link>
                    {item.subcategorias.length > 0 && (
                        <ul className='navbar__sublist'>
                            {item.subcategorias.map(sub => (
                                <li key={sub.id} className='navbar__subitem'>
                                    <Link to={`/category/${sub.name}`} className='navbar__sublink'>
                                        {sub.name}
                                    </Link>
                                    {/* Submenú de subcategorías */}
                                    {sub.subcategorias?.length > 0 && (
                                        <ul className='navbar__subsublist'>
                                            {sub.subcategorias.map(subsub => (
                                                <li key={subsub.id} className='navbar__subsubitem'>
                                                    <Link to={`/category/${sub.name}/${subsub.name}`} className='navbar__subsublink'>
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