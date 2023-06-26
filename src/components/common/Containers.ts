import { SearchBoxWidth } from "../../types/PlaylistLibraryTypes"
import styled from "styled-components"

export const PrincipalContainer = styled.body`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
background-color: ${props => props.color?props.color:'#000000'};
`
export const DashboardContainer = styled.main`
width: 100%;
height: calc(100% - 80px);
padding: 8px;
box-sizing: border-box;
display: flex;
gap: 8px;
`

export const SidebarContainer = styled.nav`
height: 100%;
max-width: 420px;
min-width: 360px;
width: 22%;
display: flex;
flex-direction: column;
gap: 8px;
`
export const DashboardContentContainer = styled.div`
background-color: #121212;
width: 78%;
height: 100%;
border-radius: 8px;
overflow: hidden;
`
export const MainOptionsContainer = styled.div`
background-color: #121212;
width: 100%;
height: 112px;
padding: 8px 12px;
box-sizing: border-box;
border-radius: 8px;
`
export const LibraryContainer = styled.div`
background-color: #121212;
width: 100%;
height: 100%;
border-radius: 8px;
overflow: hidden;
box-sizing: border-box;
`
export const LibraryTitleContainer = styled.div`
width: 100%;
height: 56px;
padding: 8px 12px;
box-sizing: border-box;
font-size: 1rem;
font-weight: 700;
color: ${props => props.color};
display:flex;
align-items: center;
justify-content: flex-start;
gap: 20px;
`
export const LibraryButtonsContainer = styled.div`
width: 100%;
height: 48px;
box-sizing: border-box;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 8px;
padding: 16px;
box-sizing: border-box;
`
export const LibraryContentContainer = styled.div`
width: 100%;
overflow-y: scroll;
height: 79%;

transition: 0.5s;
padding: 0px 0px 0px 8px;
box-sizing: border-box;
&::-webkit-scrollbar{
    width: 13px;
    background-color: transparent;
    transition: 0.5s;
    position: absolute;
}
&::-webkit-scrollbar-thumb{
    background-color: transparent;
    transition: 0.5s;
}

&:hover{
    &::-webkit-scrollbar-thumb{
        background-color: rgba(255,255,255,0.35);
    }
}
`

export const LibrarySearchContainer = styled.div`
width: 100%;
height: 34px;
padding: 2px 8px 0px;
box-sizing: border-box;
display: flex;
justify-content: flex-start;
align-items: center;
position: relative;
margin-bottom: 8px;
`
export const LibraryPlaylistSidebarContainer = styled.div`
background-color: transparent;
height: 64px;
width: 100%;
cursor: pointer;
display: flex;
align-items: center;
justify-content: flex-start;
padding: 8px;
box-sizing: border-box;
gap: 12px;

&:hover{
    background-color: #232323;
    border-radius: 8px;
}
`
export const LibraryPlaylistSidebarTextContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
gap: 10px;
user-select: none;
`
export const LibrarySearchBoxContainer= styled.div<SearchBoxWidth>`
background-color: ${props => props.color};
height: 100%;
width: ${props => props.width};
border-radius: 0px 5px 5px 0px;
transition: 0.3s;
display: flex;
align-items: center;
justify-content: flex-start;
` 
export const LibraryFilterUnflodedContainer = styled.ul`
background-color: #282828;
height: 208px;
width: 203px;
border-radius: 5px;
position: absolute;
top: 100%;
right: 8px;
margin: 0;
list-style: none;
color: white;
cursor: default;
padding: 4px;
box-sizing: border-box;
z-index: 2;
`
export const LibraryPlusUnfoldedContainer = styled(LibraryFilterUnflodedContainer)`
right: 0;
height: 88px;
width: 208px;
`
export const NotFoundContainer = styled.div`
height: 100%;
width: 100%;
background-color: #121212;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: #FFFFFF;
`
export const DashboardContentHeaderContainer = styled.header`
background-color: red;
width: 100%;
height: 64px;
display: flex;
align-items: center;
padding: 0px 20px;
box-sizing: border-box;
position: relative;
`
export const DashboardContentTitleContainer = styled.article`
background-color: yellow;
height: 276px;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: flex-end;
`
export const DashboardContentTitleContentContainer = styled.section`

`