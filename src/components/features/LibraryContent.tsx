import { getUserSavedAlbums } from "../../services/GetUserLibrary"
import { LibraryContentContainer } from "../common/Containers"
import LibraryPlaylistSidebar from "./LibraryPlaylistSidebar"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setNewAccesToken } from "../../redux/slices/AuthenticationSlice"
const LibraryContent:React.FC = () =>{
    const [albums, setAlbums] = useState<any>(null);
    const auth = useSelector((state:any) => state.authentication)
    const dispatch = useDispatch();
    useEffect(()=>{
        handleLibraryLoad(auth.accessToken, auth.refreshToken);
    },[])

    const handleLibraryLoad = async (accessToken:String, refreshToken:String) => {
        const albums = await getUserSavedAlbums(accessToken, refreshToken);
        if('newAccessToken' in albums){
            dispatch(setNewAccesToken({accessToken: albums.newAccessToken}));
            setAlbums(await getUserSavedAlbums(albums.newAccessToken, refreshToken));      
        }
        else{
            setAlbums(await getUserSavedAlbums(accessToken, refreshToken));
        }
    }
    return(
        <LibraryContentContainer>
            {
                albums&&albums.map((album:any, index:number) =>(
                    <LibraryPlaylistSidebar key={index} imgSrc={album.album.images[2].url} title={album.album.name} subTitle={`Álbum · ${album.album.artists[0].name}`}/>
                ))
            }
        </LibraryContentContainer>
    )   
}
export default LibraryContent