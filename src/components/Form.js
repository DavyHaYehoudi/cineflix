import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Form = () => {

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/550?api_key=bdca27504590d572df21083a2fdf78ab&query=star&language=fr-FR')
        .then(data => console.log(data))
    }, [])
    

    // const[movie,setMovie]=useState([]);

    // const handle = (e) =>{
    //     e.preventDefault();
    //     axios('https://api.themoviedb.org/3/movie/550?api_key=bdca27504590d572df21083a2fdf78ab')
    //         .then(res => setMovie(res))
    //         .catch(err => console.log(err))
    // }

    return (
        <div className='form-component'>
            <div className='form-container'>
                <form>
                    <input type='text'
                           placeholder="Entrez le titre d'un film"
                           id='search-input' />

                    <input type='submit' 
                           value='Rechercher' />
                </form>

                <div className='btn-sort-container'>
                    <div className='btn-sort' id='goodToBad'>Top<span>➡️</span></div>
                    <div className='btn-sort' id='badToGood'>Flop<span>➡️</span></div>
                </div>
            </div>
            {/* <div className='result'>{movie}</div> */}
        </div>
    );
};

export default Form;