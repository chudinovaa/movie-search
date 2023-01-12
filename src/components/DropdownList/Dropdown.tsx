import React from 'react';
import {IFilmWrapper} from '../../models/models';
import DropdownCSS from './Dropdown.module.css'

type DropdownProps = IFilmWrapper & {
    isLoad: boolean;
}

const Dropdown = ({films, isLoad}:DropdownProps) => {
    return (
    <ul className={DropdownCSS.ul}>
        {isLoad && <p>Loading...</p>}
        {films?.map(user => (
        <li key={user.filmId}>
            <div className={DropdownCSS.container}>
                {<img src={user.posterUrlPreview} alt={user.nameRu}/>}{user.nameRu}
            </div>
        </li>
        ))}
    </ul>
    );
};

export default Dropdown;