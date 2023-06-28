import { LibraryButtonsContainer } from "../../common/Containers"
import { LibraryButton, LibraryXButton, SelectedLibraryButton } from "../../common/Buttons"
import { useDispatch, useSelector } from "react-redux"
import { changeButtonsStatus } from "../../../redux/slices/LibrarySlice"
import { ButtonsStatus } from "../../../types/PlaylistLibraryTypes"
import { LibraryIcon } from "../../common/Icons"
const LibraryButtons: React.FC = () => {
    const dispatch = useDispatch();
    const library = useSelector((state:any)=>state.library);
    const handleButtonPressed = (newStatus:ButtonsStatus):void =>{
        dispatch(changeButtonsStatus({status:newStatus}));
    }
    return(
        <LibraryButtonsContainer>
            {(library.buttonsStatus!=='None')?
            <>
                <LibraryXButton onClick={()=>handleButtonPressed("None")}>
                        <LibraryIcon icon="cil:x" width="150%" height="150%"/>
                </LibraryXButton>  
            </>:null}
            {(library.buttonsStatus==='None')?<>
                <LibraryButton onClick={()=>handleButtonPressed("playlist")} >
                    <span>Playlists</span>
                </LibraryButton>
                <LibraryButton onClick={()=>handleButtonPressed("artist")}>
                    <span>Artistas</span>
                </LibraryButton>
                <LibraryButton onClick={()=>handleButtonPressed("album")}>
                    <span>Álbumes</span>
                </LibraryButton>
            </>:null}
            {(library.buttonsStatus==='album')?
            <>
                <SelectedLibraryButton onClick={()=>handleButtonPressed("None")}>
                    <span>Álbumes</span>
                </SelectedLibraryButton>
            </>:null}
            {(library.buttonsStatus==='artist')?<>
                <SelectedLibraryButton onClick={()=>handleButtonPressed("None")}>
                    <span>Artistas</span>
                </SelectedLibraryButton>
            </>:null}
            {(library.buttonsStatus==='playlist')?
            <>
                <SelectedLibraryButton onClick={()=>handleButtonPressed("None")}>
                    <span>playlist</span>
                </SelectedLibraryButton>
            </>:null}
        </LibraryButtonsContainer>
    )
}

export default LibraryButtons