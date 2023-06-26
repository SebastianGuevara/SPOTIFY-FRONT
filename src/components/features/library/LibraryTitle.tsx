import { HeaderContentButton } from "../../common/Buttons";
import { LibraryPlusUnfoldedContainer, LibraryTitleContainer } from "../../common/Containers"
import { Icon } from "@iconify/react/dist/iconify.js";
import { PlusLibraryIcon } from "../../common/Icons";
import { useState } from "react";
import { LibraryPlusList } from "../../common/Lists";
import OutsideClickHandler from "react-outside-click-handler";
const LibraryTitle = () =>{
    const [isPlusUnfolded, setIsPlusUnfolded] = useState(false);
    const handlePlusCLick = ():void =>{
        setIsPlusUnfolded(!isPlusUnfolded);
    }
    return(
            <LibraryTitleContainer>
                <HeaderContentButton color="#B3B3B3">
                    <Icon icon="fluent:library-20-filled" height="26px"/>
                    <span>Tu biblioteca</span>
                    <PlusLibraryIcon icon="ic:sharp-plus" onClick={()=>handlePlusCLick()}/>
                    {(isPlusUnfolded)?
                    <OutsideClickHandler onOutsideClick={()=>setIsPlusUnfolded(false)}>
                        <LibraryPlusUnfoldedContainer>
                            <LibraryPlusList color={"#E9E9E9"}>
                                <Icon icon="carbon:music-add" height="20px"/>
                                <span>Crear una lista nueva</span>
                            </LibraryPlusList>
                            <LibraryPlusList color={"#E9E9E9"}> 
                                <Icon icon="material-symbols:folder-outline" height="20px"/>
                                <span>Crear una carpeta de listas</span>
                            </LibraryPlusList>
                        </LibraryPlusUnfoldedContainer>
                    </OutsideClickHandler>:null}
                </HeaderContentButton>           
            </LibraryTitleContainer>
    )
}

export default LibraryTitle;