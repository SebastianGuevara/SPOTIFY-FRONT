import styled from "styled-components";

export const PrincipalContainer = styled.body`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: flex-start;
`
export const DashboardContentContainer = styled.main`
width: 100%;
height: calc(100% - 80px);
padding: 8px;
box-sizing: border-box;
display: flex;
gap: 8px;
`

export const SidebarContainer = styled.aside`
height: 100%;
width: 35%;
display: flex;
flex-direction: column;
gap: 8px;
`
export const DashboardPlaylistContainer = styled.div`
background-color: #121212;
width: 65%;
height: 100%;
border-radius: 8px;
`
export const MainOptionsContainer = styled.div`
background-color: #121212;
width: 100%;
height: 112px;
padding: 8px 12px;
box-sizing: border-box;
border-radius: 8px;
`
export const PlaylistLibraryContainer = styled.div`
background-color: #121212;
width: 100%;
height: 100%;
border-radius: 8px;
`