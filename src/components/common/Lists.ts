import styled from "styled-components";

export const LibraryFilterList = styled.li`
height: 40px;
width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
padding: 12px 8px 12px 12px;
box-sizing: border-box;
font-weight: 450;
transition: 0.1s;
border-radius: 5px;

&:hover{
    background-color: #3E3E3E;
}
`
export const TitleLibraryFilterList = styled(LibraryFilterList)`
font-size: 0.7rem;
color: #b3b3b3;
font-weight: 700;

&:hover{
    background-color: transparent;
}
`