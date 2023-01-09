import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {kinopoiskHeader} from './constants';
import {IFilm, ServerResponse} from '../../models/models';

export const kinopoiskApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.1'
    }),
    endpoints: build => ({
        searchFilms: build.query<IFilm[],string>({
            query: (search: string) => ({
                url: `/films/search-by-keyword?keyword=${search}`,
                method: 'GET',
                headers: kinopoiskHeader
            }),
            transformResponse: (response: ServerResponse<IFilm>) => response.films
        })
    })
})

export const {useSearchFilmsQuery} = kinopoiskApi