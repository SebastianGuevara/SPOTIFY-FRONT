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