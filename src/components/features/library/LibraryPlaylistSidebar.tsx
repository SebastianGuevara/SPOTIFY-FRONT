import { LibraryPlaylistSidebarContainer, LibraryPlaylistSidebarTextContainer } from "../../common/Containers"
import { LibraryArtistsImage, LibraryPlaylistImage } from "../../common/Images";
import PlaceholderImage1 from "../../../assets/placeholder1.png"
import { LibraryPlaylistSidebarType } from "../../../types/PlaylistLibraryTypes";
import { LibraryContentSubtitleText, LibraryContentTitleText } from "../../common/Text";

const LibraryPlaylistSidebar = (props:LibraryPlaylistSidebarType) =>{
    const { imgSrc, title, subTitle } = props;
    return (
        <LibraryPlaylistSidebarContainer>
            {("Artista"!==subTitle)?
            <LibraryPlaylistImage alt="Playlist image" src={(imgSrc)?imgSrc:PlaceholderImage1}/>:
            <LibraryArtistsImage alt="Playlist image" src={(imgSrc)?imgSrc:PlaceholderImage1}/>}
            <LibraryPlaylistSidebarTextContainer>
                <LibraryContentTitleText>{title}</LibraryContentTitleText>
                <LibraryContentSubtitleText>{subTitle}</LibraryContentSubtitleText>   
            </LibraryPlaylistSidebarTextContainer>
        </LibraryPlaylistSidebarContainer>
    )
}

export default LibraryPlaylistSidebar;