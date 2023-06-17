import { LibraryContainer, LibraryContentContainer } from "../common/Containers"
import LibraryButtons from "./LibraryButtons";
import LibraryPlaylistSidebar from "./LibraryPlaylistSidebar";
import LibrarySearchBox from "./LibrarySearchBox";
import LibraryTitle from "./LibraryTitle";


const Library: React.FC = () =>{



    return(
        <LibraryContainer>
            <LibraryTitle/>
            <LibraryButtons/>
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