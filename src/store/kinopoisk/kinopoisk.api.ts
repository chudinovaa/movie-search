import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const kinopoiskApi = createApi({
    reducerPath: 'kinopoiskApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://kinopoiskapiunofficial.tech/api/v2.2'
    }),
    endpoints: build => ({
        searchFilms: build.query<any,void>({
            query: (s) => ({
                url: `/films`,
                method: 'GET',
                headers: {
                    'X-API-KEY': '7e92c59a-8041-46bc-888d-b4aba63072e6',
                    'Content-Type': 'application/json',
                }
            })
        })
    })
})

export const {useSearchFilmsQuery} = kinopoiskApi