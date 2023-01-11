import {createSlice} from '@reduxjs/toolkit';
import {useDebounce} from '../../hooks/debounce';

interface searchState {
    search: string
}

const initialState: searchState = {
    search: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchHandler(state, action) {
            console.log(state)
            console.log(action)

            const debounced = useDebounce(action.payload.text)
            state.search = debounced
        }

    }
})

export const {searchHandler} = searchSlice.actions
export const searchReducer = searchSlice.reducer