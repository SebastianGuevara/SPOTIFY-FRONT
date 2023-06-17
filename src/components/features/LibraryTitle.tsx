import { HeaderContentButton } from "../common/Buttons";
import { LibraryTitleContainer } from "../common/Containers"
import { Icon } from "@iconify/react/dist/iconify.js";
const LibraryTitle = () =>{
    return(
            <LibraryTitleContainer>
                <HeaderContentButton color="#B3B3B3">
                    <Icon icon="fluent:library-20-filled" height="26px"/>
                    <span>Tu biblioteca</span>
                </HeaderContentButton>           
            </LibraryTitleContainer>
    )
}

export default LibraryTitle;