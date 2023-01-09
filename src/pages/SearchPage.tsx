import React, {useEffect, useState} from 'react';
import {useSearchFilmsQuery} from '../store/kinopoisk/kinopoisk.api';
import {useDebounce} from '../hooks/debounce';
import Dropdown from '../components/DropdownList/Dropdown';

const SearchPage = () => {
    const [search, setSearch] = useState('')
    const debounced = useDebounce(search)
    const {data = [], isError, isLoading} = useSearchFilmsQuery(debounced)

    console.log(data)

    useEffect(() => {
        console.log(debounced)
    }, [debounced])


    return (
    <div>
        {isError && <h1>Error loading from server.</h1>}
        {isLoading && <h1>Loading...</h1>}
        <div className={"width: 560"}>
            <input
            type="text"
            placeholder="Search film..."
            value={search}
            style={{ fontSize: 'large' ,paddingBottom: "0.5rem", paddingLeft: "1rem", paddingRight: "1rem", marginBottom: "0.5rem", width: "100%", borderWidth: "1px", height: "42px"}}
            onChange={e => setSearch(e.target.value)}
            />
            <Dropdown films={data}/>
        </div>
    </div>
    );
};

export default SearchPage;