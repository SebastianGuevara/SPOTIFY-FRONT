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
height: 24px;
width: 24px;
object-fit: contain;
border-radius: 999px;

`
export const DahsboardContentTitleImage = styled.img`
height: 232px;
width: 232px;
display: inline-flexs;
align-items: center;
justify-content: center;
box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.5);

@media (max-width: 1280px) {
    height: 192px;
    width: 192px;
}
`

export const CreatorProfileImage = styled(UserProfileImage)`
vertical-align: middle;
margin-right: 5px;
`