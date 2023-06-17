import styled from "styled-components"

export const HeaderContentButton = styled.button`
width:100%;
height: 48px;
padding: 4px 12px;
box-sizing: border-box;
display: flex;
align-items: center;
justify-content: flex-start;
color: ${props => props.color};
gap: 20px;
font-weight: 700;
font-size: 1rem;
background-color: transparent;
outline: none;
border: none;
cursor: pointer;
transition: 0.5s;

&:hover{
color: #FFFFFF;
}
`
export const LibraryFilterButton = styled.button`
color: #A7A7A7;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;
height: 32px;
width: 40%;
gap: 8px;
border: none;
font-size: 0.8rem;
font-weight: 650;
cursor: pointer;
position: absolute;
right:0;
margin: 0px 0px 0px 8px;
padding: 0px 8px 0px 12px;
transition: 0.3s;
//overflow: hidden;
&:hover{
    color: #FFFFFF;
}
`
export const LibrarySearchIconButton = styled.button`
width: 10%;
height: 32px;
display: flex;
align-items: center;
justify-content: center;
border: none;
transition: 0.1s;
border-radius: 999px;
background-color: transparent;
cursor: pointer;

&:hover{
    background-color:#232323;
}
&:disabled{
    background-color: #2A2A2A;
    cursor: text;
    color: white;
    border-radius: 5px 0px 0px 5px;
}
`