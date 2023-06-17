import { LibraryButtonsContainer, LibraryContainer, LibraryContentContainer, LibraryTitleContainer } from "../common/Containers"
import LibraryPlaylistSidebar from "./LibraryPlaylistSidebar";
import LibrarySearchBox from "./LibrarySearchBox";


const Library: React.FC = () =>{



    return(
        <LibraryContainer>
            <LibraryTitleContainer>

            </LibraryTitleContainer>
            <LibraryButtonsContainer>

            </LibraryButtonsContainer>
            <LibrarySearchBox/>
            <LibraryContentContainer>
                <LibraryPlaylistSidebar/>
                <LibraryPlaylistSidebar/>
                <LibraryPlaylistSidebar/>
            </LibraryContentContainer>
        </LibraryContainer>
    )
}

export default Library;