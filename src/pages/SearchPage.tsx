import React from 'react';
import {useSearchFilmsQuery} from '../store/kinopoisk/kinopoisk.api';

const SearchPage = () => {
    const {data, isError, isLoading} = useSearchFilmsQuery()


    return (
    <div>
        Search
    </div>
    );
};

export default SearchPage;