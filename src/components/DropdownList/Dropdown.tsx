import React from 'react';
import {IFilmWrapper} from '../../models/models';
import DropdownCSS from './Dropdown.module.css'

const Dropdown = (data:IFilmWrapper, isLoad:boolean = false) => {
    return (
    <ul className={DropdownCSS.ul}>
        {isLoad && <p>Loading...</p>}
        {data?.films.map(user => (
        <li
        key={user.filmId}
        >
            {user.nameRu}
        </li>
        ))}
    </ul>
    );
};

export default Dropdown;