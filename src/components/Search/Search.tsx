import React, {useEffect, useState} from 'react';
import {useDebounce} from '../../hooks/debounce';
import {useSearchFilmsQuery} from '../../store/kinopoisk/kinopoisk.api';
import Dropdown from '../DropdownList/Dropdown';

import SearchCSS from './Search.module.css'
import FilmList from '../FilmList/FilmList';

const Search = () => {
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    const {data = [], isError, isLoading} = useSearchFilmsQuery(debounced)

    useEffect(() => {
        console.log(debounced)
        console.log(data)
    }, [debounced])


    return (
    <div className={SearchCSS.container}>
        <form onSubmit={event => event.preventDefault()}>
            {isError && <h1>Error loading from server.</h1>}
            <div className={SearchCSS.search_wrap}>
                <input
                type="text"
                placeholder="Search film..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
                <button>Поиск</button>
            </div>
                <Dropdown films={data} isLoad={isLoading} />
        </form>
        <FilmList films={data}/>
    </div>
)};


export default Search;