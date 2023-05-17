import React, { useState, useEffect } from 'react';
import * as S from './Main_style'
import axios from 'axios';
import searchIcon from './../imgs/searchicon.svg'
import Carousel from 'react-elastic-carousel';

export default function Main ({search, setSearch}) {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      async function fetchMovies() {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9289fd1e97ccfafa4714dd0281dff393&language=pt-Br&page=1');
        setMovies(response.data.results);
      }
  
      fetchMovies();
    }, []);
  
    return (
      <S.Main onClick={() => (setSearch(search = false))}>
        <div>
          <S.MainNav>
            <S.listNavTypes>Popular</S.listNavTypes>
            <S.listNavTypes>Drama</S.listNavTypes>
            <S.listNavTypes>Ação</S.listNavTypes>
            <S.listNavTypes>Aventura</S.listNavTypes>
            <S.listNavTypes>Comédia</S.listNavTypes>
            <S.listNavTypes>Crime</S.listNavTypes>
            <S.listNavTypes>Fantasia</S.listNavTypes>
            <S.listNavTypes>Família</S.listNavTypes>
            <img src={searchIcon} alt="Search Icon" />
          </S.MainNav>
        </div>
        
        <S.recently>
        <S.text>Últimos lançamentos</S.text>
        <Carousel itemsToShow={5}>
        {movies.slice(10, 20).map(movie => (
          <div key={movie.id}>
            <S.ImgFilmes src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <S.divFilmes>
            <h2>{movie.title}</h2>
            <S.yearfilmes>{movie.release_date.slice(0, 4)}</S.yearfilmes>
            </S.divFilmes>
          </div>
        ))}
        </Carousel>
        </S.recently>

          <div>
            <S.text>Em alta</S.text>
            <S.divGrid>
            {movies.slice(0, 10).map(movie => (
          <div style={{cursor: 'pointer'}} key={movie.id}>
            <S.ImgFilmes src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <S.divFilmes>
            <h2>{movie.title}</h2>
            <S.yearfilmes>{movie.release_date.slice(0, 4)}</S.yearfilmes>
            </S.divFilmes>
          </div>
        ))}
          </S.divGrid>
          </div>


          <S.NumberListFooter>
            <S.NumberListFooter style={{textDecoration: 'none'}} >
              <S.NumberList>1</S.NumberList>
              <S.NumberList>2</S.NumberList>
              <S.NumberList>3</S.NumberList>
              <S.NumberList>4</S.NumberList> 
            </S.NumberListFooter >
              <p>...</p>
            <nav>
              <S.NumberList>322</S.NumberList>
            </nav>
              <S.lastest>último</S.lastest>
          </S.NumberListFooter>
      </S.Main>
    );
  }
