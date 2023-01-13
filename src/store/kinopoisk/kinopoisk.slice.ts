import {createSlice} from '@reduxjs/toolkit';
import {IFilm} from '../../models/models';

interface kinopoiskState {
    search: string,
    films: IFilm[]
}

const initialState: kinopoiskState = {
    search: '',
    films: []
}

export const kinopoiskSlice = createSlice({
    name: 'search',

    initialState,
    reducers: {
        addSearch(state, action) {
            state.search = action.payload
        },
        addFilms(state, action) {
            state.films = action.payload
        }
    }
})

export const {addSearch, addFilms} = kinopoiskSlice.actions
export const kinopoiskReducer = kinopoiskSlice.reducer