import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useResultContext } from '../contexts/ResultContextProvider';
import Loading from './Loading';

const Results = () => {
    const { getResults, results, searchTerm, isLoading } = useResultContext();
    const location = useLocation();
    useEffect(() => {


        return () => {

        }
    }, [])

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex justify-between space-y-6 sm:px-56'>
                    {results?.results?.map((link) => { })}
                </div>
            );
        case '/news':
            return 'SEARCH';
        case '/images':
            return 'SEARCH';
        case '/videos':
            return 'SEARCH';
        default:
            return 'ERROR';
    }
}

export default Results;