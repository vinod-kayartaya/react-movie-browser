import { useState } from 'react';

const Header = ({ setMovies }) => {
    const [searchText, setSearchText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!searchText) return;

        const url = `https://omdbapi.com/?apikey=aa9e49f&s=${searchText}`;
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => data.Search)
            .then(setMovies);
    };
    return (
        <>
            <div className='alert alert-primary'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h1>React Movie Browser</h1>
                        </div>
                        <div className='col'>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type='search'
                                    name='searchText'
                                    className='form-control'
                                    value={searchText}
                                    onChange={(e) =>
                                        setSearchText(e.target.value)
                                    }
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
