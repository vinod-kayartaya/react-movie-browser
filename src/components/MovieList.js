import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    const movieCards = movies.map((m) => (
        <div className='col-4'>
            <MovieCard movie={m} />
        </div>
    ));
    return (
        <>
            <div className='row'>{movieCards}</div>
        </>
    );
};

export default MovieList;
