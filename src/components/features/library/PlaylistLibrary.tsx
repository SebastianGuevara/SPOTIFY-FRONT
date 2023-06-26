import { LibraryContainer } from "../../common/Containers";
import LibraryButtons from "./LibraryButtons";
import LibraryContent from "./LibraryContent";
import LibrarySearchBox from "./LibrarySearchBox";
import LibraryTitle from "./LibraryTitle";


const Library: React.FC = () =>{



    return(
        <LibraryContainer>
            <LibraryTitle/>
            <LibraryButtons/>
            <LibrarySearchBox/>
            <LibraryContent/>
        </LibraryContainer>
    )
}

export default Library;