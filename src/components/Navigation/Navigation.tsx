import React from 'react';
import {Link} from 'react-router-dom'
import NavigationCSS from './Navigation.module.css'

const Navigation = () => {
    return (
    <ul className={NavigationCSS.ul}>
        <li>
            <Link to="/">Search</Link>
        </li>
        <li>
            <Link to="/favourites">Favourites</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
    </ul>
    );
};

export default Navigation;