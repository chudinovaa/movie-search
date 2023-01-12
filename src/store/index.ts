import {configureStore} from '@reduxjs/toolkit';
import {kinopoiskApi} from './kinopoisk/kinopoisk.api';
import {kinopoiskReducer} from './kinopoisk/kinopoisk.slice';
export const store = configureStore({
    reducer: {
        search: kinopoiskReducer,
        [kinopoiskApi.reducerPath]: kinopoiskApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(kinopoiskApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;