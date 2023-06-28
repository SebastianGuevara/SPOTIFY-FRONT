import { getUserFollowedArtist, getUserLikedSongs, getUserPlaylists, getUserSavedAlbums } from "../../../services/GetUserLibrary"
import { LibraryContentContainer } from "../../common/Containers"
import LibraryPlaylistSidebar from "./LibraryPlaylistSidebar"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setNewAccesToken } from "../../../redux/slices/AuthenticationSlice"

const LibraryContent:React.FC = () =>{
    const [albums, setAlbums] = useState<any>(null);
    const [artists, setArtists] = useState<any>(null);
    const [playlists, setPlaylists] = useState<any>(null);
    const [likedSongs, setLikedSongs] = useState<any>(null);
    const [library, setLibrary] = useState<any>(null);
    const [completeLibrary, setCompleteLibrary] = useState<any>(null);
    const auth = useSelector((state:any) => state.authentication);
    const user = useSelector((state:any) => state.user);
    const libraryState = useSelector((state:any) => state.library)
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(library);
        if(!library)handleLibraryLoad(auth.accessToken, auth.refreshToken);
    },[])

    useEffect(()=>{
        if(library){
            if("None"!==libraryState.buttonsStatus){
                const filteredLibrary = library.filter((item:any)=>{
                    return item.type===libraryState.buttonsStatus;    
                })
                setLibrary(filteredLibrary);
            }
            else{
                setLibrary(completeLibrary);
            }
        }
    },[libraryState.buttonsStatus])

    useEffect(()=>{
        if(playlists&&albums&&artists&&likedSongs){
            combineLibrary();
        }
    },[playlists,albums,artists,likedSongs])

    const handleLibraryLoad = async (accessToken:String, refreshToken:String) => {
        const albums = await getUserSavedAlbums(accessToken, refreshToken);
        const artists = await getUserFollowedArtist(accessToken, refreshToken);
        const likedSongs = await getUserLikedSongs(accessToken, refreshToken);
        const playlists = await getUserPlaylists(accessToken, refreshToken,user.id);
        if('newAccessToken' in albums || 'newAccessToken' in artists || 'newAccessToken' in playlists || 'newAccessToken' in likedSongs){
            dispatch(setNewAccesToken({accessToken: albums.newAccessToken}));
            handleLibraryLoad(albums.newAccessToken, refreshToken);  
        }
        else{
            setAlbums(await getUserSavedAlbums(accessToken, refreshToken));
            setArtists(await getUserFollowedArtist(accessToken, refreshToken));
            setPlaylists(await getUserPlaylists(accessToken, refreshToken,user.id));
            setLikedSongs(await getUserLikedSongs(accessToken, refreshToken));
        }
    }

    const combineLibrary = () =>{
        const formatedAlbums = albums.map((album:any) =>{
            return(
                {
                    id:album.album.id,
                    title:album.album.name,
                    subTitle: `Álbum · ${album.album.artists[0].name}`,
                    image: album.album.images[2].url,
                    addedAt: album.added_at,
                    type: "album"
                }
            )
        })
        const formatedArtist = artists.map((artist:any) =>{
            return(
                {
                    id:artist.id,
                    title:artist.name,
                    subTitle:"Artista",
                    image: artist.images[2].url,
                    addedAt: null,
                    type: "artist"
                }
            )
        })
        const formatePlaylists = playlists.map((playlist:any)=>{
            return(
                {
                    id: playlist.id,
                    title: playlist.name,
                    subTitle: `Lista · ${playlist.owner.display_name}`,
                    image: playlist.images[0].url,
                    addedAt: null,
                    type: "playlist"
                }
            )
        })
        const formatedLikedSongs = [{
            id: "tracks",
            title:"Tus me gusta",
            subTitle:`Lista · ${likedSongs.total} canciones`,
            image: null,
            addedAt: null,
            type: "playlist"
        }]

        setLibrary([...formatedAlbums,...formatedArtist,...formatePlaylists,...formatedLikedSongs])
        setCompleteLibrary([...formatedAlbums,...formatedArtist,...formatePlaylists,...formatedLikedSongs])
        
    }
    return(
        <LibraryContentContainer>
            {
                library&&library.map((item:any, key:number)=>(
                    <LibraryPlaylistSidebar key={key} imgSrc={item.image} title={item.title} subTitle={item.subTitle}/>
                ))
            }
        </LibraryContentContainer>
    )   
}
export default LibraryContent