import React from 'react';
import {IFilm} from '../../models/models';
import FilmItemCSS from './FilmItem.module.css'

type FilmItemProps = {
    film: IFilm
}

const FilmItem = (film: FilmItemProps) => {
    return (
    <div className={FilmItemCSS.wrapper}>
        <div className={FilmItemCSS.poster_wrapper}>
            <img src={film.film.posterUrlPreview} alt={film.film.nameRu}/>
        </div>
        <div className={FilmItemCSS.text_wrapper}>
            <h4>{film.film.nameRu} ({film.film.year})</h4>
            <p>{film.film.nameEn}, {film.film.filmLength}</p>
            <p>{film.film.countries.map(country => `${country.country} `)}</p>
            <p>{film.film.description}</p>
        </div>
    </div>

    );
};

export default FilmItem;