import React from 'react';
import { IFilmWrapper} from '../../models/models';
import FilmItem from '../FilmItem/FilmItem';
import FilmListCSS from './FilmList.module.css'


const FilmList = (films: IFilmWrapper) => {
    return (
    <div className={FilmListCSS.container}>
        {films && films.films.map(film => (
        <FilmItem key={film.filmId} film={film}/>
        ))}
    </div>
    );
};

export default FilmList;