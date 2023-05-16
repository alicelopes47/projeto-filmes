import React, { useState, useEffect } from 'react';
import * as S from './Header_Style'
import logo from './../imgs/logo.png'
import avatar from './../imgs/avatar2.png'
import searchIcon from './../imgs/searchicon.svg'
import axios from 'axios';
import star from './../imgs/star.png'

const Header = ({search, setSearch}) => {
    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchMovie() {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=9289fd1e97ccfafa4714dd0281dff393&language=pt-Br&page=1');
            const movie = response.data.results.find(movie => movie.id === 76600);
            setMovie(movie);
        }
  
        fetchMovie();
    }, []);
  
    return (
    <>
        <S.NavDivHeader>
            <div>
                <S.logo src={logo} alt=''/>
            </div>
            <div>
                <nav>
                    <S.HeaderList>
                        <S.HeaderListContent>Séries</S.HeaderListContent>
                        <S.HeaderListContent>Filmes</S.HeaderListContent>
                    </S.HeaderList>
                </nav>
            </div>
            <div>
                <nav>
                    <S.HeaderRightList>
                    {(search === true ? (<S.input type='text'/>) : (<S.imgsearch src={searchIcon} alt='search icon' onClick={() => (setSearch(!search))} />))}
                        <li>Login</li>
                        <li>Filtro</li>
                    </S.HeaderRightList>
                </nav>
            </div>
        </S.NavDivHeader>

        <S.mainContentHeader onClick={() => (setSearch(search = false))} style={{
             backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1)0%, rgba(0, 0, 0, 0)30%), 
             url(${avatar})`,
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <S.divInfo>
               <h1>{movie.title}</h1>
               <p>3hr 23min | Fantasia, Família | 2023</p>
               <S.IMDcontainer>
                <img src={star} alt='' />
                <S.IMDPAcontainer>{movie.vote_average}</S.IMDPAcontainer>
                <S.IMDPcontainer>/10</S.IMDPcontainer>
               </S.IMDcontainer>
               <S.overviewcontainer>{movie.overview}</S.overviewcontainer>
               <S.buttonsContaier>
               <S.button>Assistir agora</S.button>
               <S.button>Trailer</S.button>
               </S.buttonsContaier>
            </S.divInfo>
        </S.mainContentHeader>
    </>
  )
}

export default Header