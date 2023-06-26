import styled from "styled-components";

export const LibraryPlaylistImage:any = styled.img`
height: 50px;
width: 50px;
border-radius: 3px;
user-select: none;
object-fit: cover;
`
export const LibraryArtistsImage:any = styled(LibraryPlaylistImage)`
border-radius: 999px;
`
export const NotFoundLogo = styled.img`
height: 60px;
width: 60px;
`
export const UserProfileImage = styled.img`
height: 100%;
width: auto;
object-fit: contain;
border-radius: 999px;
`