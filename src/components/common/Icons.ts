import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const MainMenuIcon = styled(Icon)`

`
export const LibraryIcon = styled(Icon)`
color: #FFFFFF;
`
export const LibraryCheckIcon = styled(Icon)`
position: absolute;
right: 8px;
`
export const PlusLibraryIcon = styled(Icon)`
position: absolute;
right: 8px;
height: 32px;
width: 32px;
padding: 4px;
box-sizing: border-box;
border-radius: 999px;
transition: 0.3s;
&:hover{
    background-color: #1A1A1A;
}
`
export const HeartIcon = styled(Icon)`
color:#A7A7A7;
cursor:pointer;

&:hover{
    scale:1.05;
    color: white;
}
`