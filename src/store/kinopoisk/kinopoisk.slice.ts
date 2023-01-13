import {createSlice} from '@reduxjs/toolkit';

interface kinopoiskState {
    search: string,
}

const initialState: kinopoiskState = {
    search: '',
}

export const kinopoiskSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearch(state, action) {
            state.search = action.payload
            console.log(action.payload)
            console.log(state)
        }
    }
})

export const {addSearch} = kinopoiskSlice.actions
export const kinopoiskReducer = kinopoiskSlice.reducer