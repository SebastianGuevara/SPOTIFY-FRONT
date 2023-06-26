import { LibrarySearchContainer, LibrarySearchBoxContainer, LibraryFilterUnflodedContainer } from "../../common/Containers"
import { LibraryFilterButton, LibrarySearchIconButton } from "../../common/Buttons"
import { Icon } from "@iconify/react/dist/iconify.js"
import { LibraryIcon, LibraryCheckIcon } from "../../common/Icons"
import { LibraryFilterText } from "../../common/Text"
import { LibrarySearchBoxInput } from "../../common/Inputs"
import { useState, useRef } from "react"
import OutsideClickHandler from 'react-outside-click-handler';
import { LibraryFilterList, TitleLibraryFilterList } from "../../common/Lists"
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterStatus } from "../../../redux/slices/LibrarySlice"
import { FilterStatus } from "../../../types/PlaylistLibraryTypes";
const LibrarySearchBox = () =>{
    const [searchBoxIsActive, setSearchBoxIsActive] = useState(false);
    const [isFilterButtonActive, setIsFilterButtonActive] = useState(false);
    const inputSearchBoxRef = useRef<HTMLInputElement|null>(null);
    const listFilterRef = useRef<HTMLUListElement|null>(null);
    const dispatch = useDispatch();
    const library = useSelector((state:any) => state.library);

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
    const handleFilterSelection = (newFilterStatus: FilterStatus): void=>{
        setIsFilterButtonActive(false);
        dispatch(changeFilterStatus({status:newFilterStatus}));
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
                <LibraryFilterText>{library.filterStatus}</LibraryFilterText>
                {!isFilterButtonActive?<Icon icon="teenyicons:down-solid" height="16px"/>:
                <Icon icon="teenyicons:up-solid" height="16px"/>}
                {isFilterButtonActive?
                <OutsideClickHandler onOutsideClick={()=>setIsFilterButtonActive(false)}>
                    <LibraryFilterUnflodedContainer ref={listFilterRef} onClick={(event)=>{event.stopPropagation()}}>
                        <TitleLibraryFilterList>Ordenar por</TitleLibraryFilterList>
                        <LibraryFilterList onClick={()=>handleFilterSelection("Recent")} color={(library.filterStatus==="Recent")?"#1ED760":"#FFFFFF"}>
                            <span>Recientes</span>
                            {(library.filterStatus==="Recent")?<LibraryCheckIcon icon="ic:sharp-check" height="22px"/>:null}
                        </LibraryFilterList>
                        <LibraryFilterList onClick={()=>handleFilterSelection("RecentAdded")} color={(library.filterStatus==="RecentAdded")?"#1ED760":"#FFFFFF"}>
                            <span>Agregados recientemente</span>
                            {(library.filterStatus==="RecentAdded")?<LibraryCheckIcon icon="ic:sharp-check" height="22px"/>:null}
                        </LibraryFilterList>
                        <LibraryFilterList onClick={()=>handleFilterSelection("Alfabetically")} color={(library.filterStatus==="Alfabetically")?"#1ED760":"#FFFFFF"}>
                            <span>Alfabéticamente</span>
                            {(library.filterStatus==="Alfabetically")?<LibraryCheckIcon icon="ic:sharp-check" height="22px"/>:null}
                        </LibraryFilterList>
                        <LibraryFilterList onClick={()=>handleFilterSelection("Creator")} color={(library.filterStatus==="Creator")?"#1ED760":"#FFFFFF"}>
                            <span>Creador</span>
                            {(library.filterStatus==="Creator")?<LibraryCheckIcon icon="ic:sharp-check" height="22px"/>:null}
                        </LibraryFilterList>
                    </LibraryFilterUnflodedContainer>
                </OutsideClickHandler>:null}
            </LibraryFilterButton>
        </LibrarySearchContainer>      
    )
}

export default LibrarySearchBox;