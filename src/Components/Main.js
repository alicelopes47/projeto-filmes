import React, { useState, useEffect } from 'react';
import * as S from './Main_style'
import axios from 'axios';

export default function Main () {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      async function fetchMovies() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9289fd1e97ccfafa4714dd0281dff393&language=pt-Br&page=1');
        setMovies(response.data.results);
      }
  
      fetchMovies();
    }, []);
  
    return (
      <div>
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.popularity}</p>
          </div>
        ))}
      </div>
    );
  }
