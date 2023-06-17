import { LibrarySearchContainer, LibrarySearchBoxContainer, LibraryFilterUnflodedContainer } from "../common/Containers"
import { LibraryFilterButton, LibrarySearchIconButton } from "../common/Buttons"
import { Icon } from "@iconify/react/dist/iconify.js"
import { LibraryIcon } from "../common/Icons"
import { LibraryFilterText } from "../common/Text"
import { LibrarySearchBoxInput } from "../common/Inputs"
import { useState, useRef } from "react"
import OutsideClickHandler from 'react-outside-click-handler';
import { LibraryFilterList, TitleLibraryFilterList } from "../common/Lists"
const LibrarySearchBox = () =>{
    const [searchBoxIsActive, setSearchBoxIsActive] = useState(false);
    const [isFilterButtonActive, setIsFilterButtonActive] = useState(false);
    const inputSearchBoxRef = useRef<HTMLInputElement|null>(null);
    const listFilterRef = useRef<HTMLUListElement|null>(null);

    const handleSearchBoxClick = ():void =>{
        setSearchBoxIsActive(!searchBoxIsActive);
        if(!searchBoxIsActive){
            inputSearchBoxRef.current?.focus();
        }
        
    }
    const handleFilterButtonClick = (): void=>{
        setIsFilterButtonActive(!isFilterButtonActive);
        listFilterRef.current?.focus();
    }
    return(
        <LibrarySearchContainer>
            <LibrarySearchIconButton onClick={()=>handleSearchBoxClick()} disabled={searchBoxIsActive}>
                <LibraryIcon icon="mingcute:search-line" width="90%" height="90%"/>
            </LibrarySearchIconButton>
            <LibrarySearchBoxContainer width={(searchBoxIsActive)?'50%':'0%'} color={(searchBoxIsActive)?`rgba(42, 42, 42, 1)`:`rgba(42, 42, 42, 0)`}>                    
                <LibrarySearchBoxInput ref={inputSearchBoxRef} placeholder="Buscar en tu Biblioteca" onBlur={()=>setSearchBoxIsActive(false)}/>
            </LibrarySearchBoxContainer>    
            <LibraryFilterButton onClick={()=>handleFilterButtonClick()}>
                <LibraryFilterText>Recientes</LibraryFilterText>
                {!isFilterButtonActive?<Icon icon="teenyicons:down-solid" height="16px"/>:
                <Icon icon="teenyicons:up-solid" height="16px"/>}
                {isFilterButtonActive?
                <OutsideClickHandler onOutsideClick={()=>setIsFilterButtonActive(false)}>
                    <LibraryFilterUnflodedContainer ref={listFilterRef} onClick={(event)=>{event.stopPropagation()}}>
                        <TitleLibraryFilterList>Ordenar por</TitleLibraryFilterList>
                        <LibraryFilterList>Recientes</LibraryFilterList>
                        <LibraryFilterList>Agregados recientemente</LibraryFilterList>
                        <LibraryFilterList>Alfabeticamente</LibraryFilterList>
                        <LibraryFilterList>Creador</LibraryFilterList>
                    </LibraryFilterUnflodedContainer>
                </OutsideClickHandler>:null}
            </LibraryFilterButton>
        </LibrarySearchContainer>      
    )
}

export default LibrarySearchBox;