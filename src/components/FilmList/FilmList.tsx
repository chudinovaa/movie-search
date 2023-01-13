import React from 'react';
import { IFilmWrapper} from '../../models/models';
import FilmItem from '../FilmItem/FilmItem';
import FilmListCSS from './FilmList.module.css'
import {useAppSelector} from '../../hooks/redux';


const FilmList = () => {
    const films = useAppSelector(state => state.search.films)

    return (
    <div className={FilmListCSS.container}>
        {films && films.map(film => (
        <FilmItem key={film.filmId} film={film}/>
        ))}
    </div>
    );
};

export default FilmList;