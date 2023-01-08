import React from 'react';
import {Link} from 'react-router-dom'
import NavigationCSS from './Navigation.module.css'

const Navigation = () => {
    return (
    <ul className={NavigationCSS.ul}>
        <li>
            <Link className={NavigationCSS.link} to="/">Search</Link>
        </li>
        <li>
            <Link className={NavigationCSS.link} to="/favourites">Favourites</Link>
        </li>
        <li>
            <Link className={NavigationCSS.link} to="/about">About</Link>
        </li>
    </ul>
    );
};

export default Navigation;