import styled from "styled-components"

export const logo = styled.img `
width: 150px;
`

export const NavDivHeader = styled.div `
display: flex;
padding: 1em 2em;
width: 100%;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
backdrop-filter: blur(5px);
color: white;
z-index: 999999;
font-family: 'Open Sans', sans-serif;
`

export const HeaderList = styled.div `
display: flex;
list-style: none; 
font-size: 1.5em;
`

export const HeaderRightList = styled.div `
display: flex;
list-style: none; 
font-size: 1.5em;
gap: 1em;
`

export const HeaderListContent = styled.li ` 
padding: 0.5em 1.2em;
&:hover { 
    border-radius: 2em;
    background-color: gray;
    transition: 0.2s;
}
`

export const mainContentHeader = styled.div `
width: 100%;
height: 80vh;
display: flex;
justify-content: start;
align-items: end;
font-family: 'Open Sans', sans-serif;
color: white;
`

export const infoContainer = styled.div `
display: flex;
flex-direction: column;
`

export const IMDcontainer = styled.div `
display: flex;
align-items: center;
margin: 0.5rem 0;
`

export const IMDPAcontainer = styled.p `
font-size: 2em;
`

export const IMDPcontainer = styled.p `
font-size: 1em;
`

export const divInfo = styled.div `
width: 40%;
margin-left: 2em;
margin-bottom: 2em;
`

export const overviewcontainer = styled.p `
font-size: 1.4em;
font-weight: 200;
`

export const buttonsContaier = styled.div `
display: flex;
margin-top: 1rem;
gap: 2rem;
`

export const button = styled.button `
    font-size: 1.2em;
    width: 30%;
    padding: 0.5em 0;
    font-weight: 800;
    border-radius: 1em;
    background-color: #717171;
    color: white;
    box-shadow: none;
    border: solid #717171;
    &:hover { 
        background-color: #D53A00;
        border: solid #D53A00;
    }
`

export const input = styled.input `
width: 6em;
transition: 0.2s;
`

export const imgsearch = styled.img `
cursor: pointer;
`
