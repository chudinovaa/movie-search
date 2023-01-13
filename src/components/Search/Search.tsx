import React, {useEffect, useState} from 'react';
import {useDebounce} from '../../hooks/debounce';
import {useSearchFilmsQuery} from '../../store/kinopoisk/kinopoisk.api';
import Dropdown from '../DropdownList/Dropdown';

import SearchCSS from './Search.module.css'
import {addFilms, addSearch} from '../../store/kinopoisk/kinopoisk.slice';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {IFilm} from '../../models/models';

const Search = () => {
    const [search, setSearch] = useState('')
    const [dropdown, setDropdown] = useState(false)
    const debounced = useDebounce(search)
    const {data = [], isError, isLoading} = useSearchFilmsQuery(debounced)
    const dispatch = useAppDispatch()


    useEffect(() => {
        if (debounced.length > 2) {
            setDropdown(true)
        } else {
            setDropdown(false)
        }
    }, [debounced])

    const handleAction = () => {
        if (debounced.trim().length) {
            dispatch(addSearch(debounced))
        }
    }

    const handleOnFocus = () => {
        setDropdown(true)
    }

    const handleOnBlur = () => {
        setDropdown(false)

    }

    const onSubmitHandle = (event: React.FormEvent ) => {
        event.preventDefault()
        handleAction()
    }

    const clickHandle = (films: IFilm[]) => {
        if (films) {
            dispatch(addFilms(films))
        }
    }


    return (
    <div className={SearchCSS.container}>
        <form onSubmit={onSubmitHandle}>
            {isError && <h1>Error loading from server.</h1>}
            <div className={SearchCSS.search_wrap}>
                <input
                type="text"
                placeholder="Search film..."
                value={search}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                onChange={e => setSearch(e.target.value)}
                />
                <button
                onClick={() => clickHandle(data)}
                >Поиск</button>
            </div>
            {dropdown && <Dropdown films={data} isLoad={isLoading} />}
        </form>
    </div>
)};


export default Search;