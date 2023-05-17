import styled from "styled-components"

export const Main = styled.div `
background-color: black;
color: white;
padding-bottom: 2em;

`
export const MainNav = styled.nav `
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-around;
align-items: center;
list-style: none;
font-size: 1.5em;
padding: 1em 0.2em;
font-family: 'Open Sans', sans-serif;
`
export const listNavTypes = styled.li `
&:hover { 
        color: #D53A00;
        cursor: pointer;
    }
`

export const ImgFilmes = styled.img `
width: 300px;
margin: 1em;
cursor: pointer;
`
export const recently = styled.div `
padding: 1em 0.1em;

`

export const text = styled.h2 `
margin-left: 3em;
font-family: 'Open Sans', sans-serif;
`
export const divFilmes = styled.div `
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
font-family: 'Open Sans', sans-serif;
font-size: 0.8em;
margin-left: 1em;
`

export const yearfilmes = styled.p `
align-self: start;
`
export const divGrid = styled.div `
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 10px 10px; 
  padding: 1em 4em;
  grid-template-areas: 
    ". . . . ."
    ". . . . .";   
`

export const NumberListFooter = styled.div `
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
gap: 1em;
`

export const NumberList = styled.li `
border: solid white;
list-style: none;
padding: 1em 1.3em;
border-radius: 2em;
font-family: 'Open Sans', sans-serif;
font-size: 1.2em;
&:hover { 
    background-color: white;
    color: black;
    border: solid black;
    cursor: pointer;
    }
`

export const lastest = styled.p `
border: solid  white;
font-size: 1.2em;
font-family: 'Open Sans', sans-serif;
padding: 0.7em;
border-radius: 0.2em;
&:hover { 
    background-color: white;
    color: black;
    border: solid black;
    cursor: pointer;
    }
`