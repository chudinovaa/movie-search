import React, {useEffect, useState} from 'react';
import {useDebounce} from '../../hooks/debounce';
import {useSearchFilmsQuery} from '../../store/kinopoisk/kinopoisk.api';
import Dropdown from '../DropdownList/Dropdown';

import SearchCSS from './Search.module.css'
import FilmList from '../FilmList/FilmList';
import {addSearch} from '../../store/kinopoisk/kinopoisk.slice';
import {useAppDispatch} from '../../hooks/redux';

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
        console.log('Drop ON')
    }

    const handleOnBlur = () => {
        setDropdown(false)
        console.log('Drop OFF')

    }

    const onSubmitHandle = (event: React.FormEvent ) => {
        event.preventDefault()
        handleAction()
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
                <button>Поиск</button>
            </div>
            {dropdown && <Dropdown films={data} isLoad={isLoading} />}
        </form>
        <FilmList films={data}/>
    </div>
)};


export default Search;