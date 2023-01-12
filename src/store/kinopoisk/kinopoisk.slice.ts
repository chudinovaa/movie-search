import {createSlice} from '@reduxjs/toolkit';

interface kinopoiskState {
    search: string
}

const initialState: kinopoiskState = {
    search: ''
}

export const kinopoiskSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchHandler(state, action) {
            console.log(state)
            console.log(action)
        }

    }
})

export const {searchHandler} = kinopoiskSlice.actions
export const kinopoiskReducer = kinopoiskSlice.reducer