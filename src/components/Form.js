import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {

    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState('code');
    const [sortGoodBad, setSortGoodBad] = useState(null)

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`)
            .then(res => setMoviesData(res.data.results))
    }, [search])

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }


    return (
        <div className='form-component'>
            <div className='form-container'>
                <form>
                    <input type='text'
                        placeholder="Entrez le titre d'un film"
                        id='search-input'
                        onChange={(e) => handleSearch(e)} />

                    <input type='submit'
                        value='Rechercher' />
                </form>

                <div className='btn-sort-container'>
                    <div className='btn-sort'
                        id='goodToBad'
                        onClick={() =>  setSortGoodBad('goodToBad')} >
                            Topp 
                        <span class="fa-solid fa-arrow-right"></span>
                        </div>
                    <div className='btn-sort'
                        id='badToGood'
                        onClick={() => setSortGoodBad('BadToGood')} >
                            Flop 
                        <span class="fa-solid fa-arrow-right"></span>
                    </div>
                </div>
            </div>
            <div className='result'>
                {
                    moviesData
                        .slice(0, 60)
                        .sort((a, b) => {
                            if (sortGoodBad === 'goodToBad') {
                                return b.vote_average - a.vote_average
                            } else if (sortGoodBad === 'badToGood') {
                                return a.vote_average - b.vote_average
                            }
                        })
                        .map(movie =>
                            <Card key={movie.id} movie={movie} />

                        )
                }
            </div>
        </div>
    );
};

export default Form;