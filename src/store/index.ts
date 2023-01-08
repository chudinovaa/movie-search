import {configureStore} from '@reduxjs/toolkit';
import {kinopoiskApi} from './kinopoisk/kinopoisk.api';

export const store = configureStore({
    reducer: {
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware)
})