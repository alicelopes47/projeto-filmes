import React from 'react'
import * as S from './Header_Style'
import logo from './../imgs/logo.png'

const Header = () => {
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
                        <li>Login</li>
                        <li>Filtro</li>
                    </S.HeaderRightList>
                </nav>
            </div>
        </S.NavDivHeader>
    </>
  )
}

export default Header