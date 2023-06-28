import { DahsboardContentTitleSubtitleContainer, DashboardContentTitleContainer, DashboardContentTitleContentContainer, DashboardContentTitleTextContaienr } from "../../common/Containers"
import { CreatorProfileImage, DahsboardContentTitleImage } from "../../common/Images";
import { DashboardSubtitle, DashboardTitleSubtitle, DashboardTitleText, DashboardTypeText } from "../../common/Text";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { getPlaylist } from "../../../services/GetDashoardContent"
import notImage from '../../../assets/notImage.png';
import { setNewAccesToken } from "../../../redux/slices/AuthenticationSlice"
import { getUserDataById } from "../../../services/GetUserData";



const ContentTitle: React.FC<{setBackgroundColorImage:any}> = (props) => {
    const [playlist, setPlaylist] = useState<any>(null);
    const dispatch = useDispatch();
    const auth = useSelector((state:any)=>state.authentication);
    const { id } = useParams();
    const {setBackgroundColorImage} = props;

    useEffect(()=>{
        handleComponentLoad();
    },[id])


    const handleComponentLoad = async () =>{
        const rawPlaylist = await getPlaylist(auth.accessToken,auth.refreshToken, id);
        console.log(rawPlaylist);
        if('newAccessToken' in rawPlaylist){
            dispatch(setNewAccesToken({accessToken: rawPlaylist.newAccessToken}));
            handleComponentLoad();
        }
        else{
            const userData = await getUserDataById(auth.accessToken,auth.refreshToken,rawPlaylist.owner.id);
            if('newAccessToken' in userData){
                dispatch(setNewAccesToken({accessToken: rawPlaylist.newAccessToken}));
                handleComponentLoad();
            }
            else{
                const formatedPlaylist = {
                    name: rawPlaylist.name,
                    description: (''!==rawPlaylist.description)?rawPlaylist.description:null,
                    image: (rawPlaylist.images.length>0)?rawPlaylist.images[0].url:notImage,
                    isCollaborative: rawPlaylist.collaborative,
                    owner: rawPlaylist.owner.display_name,
                    owner_photo: (userData.images.length>0?userData.images[0].url:null),
                    total_tracks: rawPlaylist.tracks.total,
                    type: rawPlaylist.type,
                    likes: rawPlaylist.followers.total,
                }
                setPlaylist(formatedPlaylist);
                setBackgroundColorImage(formatedPlaylist.image);
            }
        }
    }
    return(
        <DashboardContentTitleContainer>
            <DashboardContentTitleContentContainer>
                {(playlist)&&<DahsboardContentTitleImage src={playlist.image} alt="Dashboard principal image"/>}
                <DashboardContentTitleTextContaienr>
                    <DashboardTypeText>Lista</DashboardTypeText>
                    {(playlist)&&<DashboardTitleText>{playlist.name}</DashboardTitleText>}
                    {(playlist)&&<DashboardSubtitle>{playlist.description}</DashboardSubtitle>}
                    <DahsboardContentTitleSubtitleContainer>

                        <DashboardTitleSubtitle>
                            {(playlist)&&<CreatorProfileImage alt="Playlist creator profile photo" src={playlist.owner_photo}/>}
                            <b><a>{(playlist)&&playlist.owner}</a></b> <b>·</b> {(playlist)&&`${playlist.likes} me gusta`} <b>·</b> {(playlist)&&`${playlist.total_tracks} canciones`}, <span>más de 24 h</span></DashboardTitleSubtitle>
                    </DahsboardContentTitleSubtitleContainer>
                </DashboardContentTitleTextContaienr>
            </DashboardContentTitleContentContainer>
        </DashboardContentTitleContainer>
    )
}

export default ContentTitle;