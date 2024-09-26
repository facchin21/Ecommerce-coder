import React from 'react';

export const NavBarList = ({ items }) => {
    return (
        <ul className='navbar__list'>
            {items.map(item => (
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
    );
};