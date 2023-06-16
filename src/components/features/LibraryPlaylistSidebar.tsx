import { LibraryPlaylistSidebarContainer, LibraryPlaylistSidebarTextContainer } from "../common/Containers"
import { LibraryPlaylistImage } from "../common/Images";
import PlaceholderImage1 from "../../assets/placeholder1.png"
import { LibraryContentSubtitleText, LibraryContentTitleText } from "../common/Text";

const LibraryPlaylistSidebar = () =>{
    return (
        <LibraryPlaylistSidebarContainer>
            <LibraryPlaylistImage alt="Playlist image" src={PlaceholderImage1}/>
            <LibraryPlaylistSidebarTextContainer>
                <LibraryContentTitleText>Tus me gusta</LibraryContentTitleText>
                <LibraryContentSubtitleText>Lista · 485 canciones</LibraryContentSubtitleText>   
            </LibraryPlaylistSidebarTextContainer>
        </LibraryPlaylistSidebarContainer>
    )
}

export default LibraryPlaylistSidebar;