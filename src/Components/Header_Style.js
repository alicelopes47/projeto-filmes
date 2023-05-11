import styled from "styled-components"

export const logo = styled.img `
width: 100px;
`

export const NavDivHeader = styled.div `
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
backdrop-filter: blur(5px);
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