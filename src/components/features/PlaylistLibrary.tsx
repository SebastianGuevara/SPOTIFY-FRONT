import { LibraryButtonsContainer, LibraryContainer, LibraryContentContainer, LibrarySearchContainer, LibraryTitleContainer } from "../common/Containers"
import LibraryPlaylistSidebar from "./LibraryPlaylistSidebar";

const Library: React.FC = () =>{
    return(
        <LibraryContainer>
            <LibraryTitleContainer>

            </LibraryTitleContainer>
            <LibraryButtonsContainer>

            </LibraryButtonsContainer>
            <LibraryContentContainer>
                <LibrarySearchContainer>

                </LibrarySearchContainer>
                <LibraryPlaylistSidebar/>
                <LibraryPlaylistSidebar/>
                <LibraryPlaylistSidebar/>
            </LibraryContentContainer>
        </LibraryContainer>
    )
}

export default Library;