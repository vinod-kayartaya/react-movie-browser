import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import { useState } from 'react';

const App = () => {
    const [movies, setMovies] = useState([]);

    return (
        <>
            <Header setMovies={setMovies} />
            <div styles={{ minHeight: '700px' }} className='container'>
                <MovieList movies={movies} />
            </div>
            <Footer />
        </>
    );
};

export default App;
