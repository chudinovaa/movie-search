export interface ICountry {
    country: string;
}

export interface IGenre {
    genre: string;
}

export interface IFilm {
    filmId: number;
    nameRu: string;
    nameEn: string;
    type: string;
    year: string;
    description: string;
    filmLength: string;
    countries: ICountry[];
    genres: IGenre[];
    rating: string;
    ratingVoteCount: number;
    posterUrl: string;
    posterUrlPreview: string;
}

export interface ServerResponse<T> {
    keyword: string;
    pagesCount: number;
    films: T[];
    searchFilmsCountResult: number;
}

export interface IFilmWrapper {
    films: IFilm[];
}