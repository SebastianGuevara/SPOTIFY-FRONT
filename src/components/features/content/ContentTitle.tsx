import { DahsboardContentTitleSubtitleContainer, DashboardContentTitleContainer, DashboardContentTitleContentContainer, DashboardContentTitleTextContaienr } from "../../common/Containers"
import { CreatorProfileImage, DahsboardContentTitleImage } from "../../common/Images";
import { DashboardSubtitle, DashboardTitleSubtitle, DashboardTitleText } from "../../common/Text";
import { useSelector } from "react-redux";



const ContentTitle: React.FC = () => {
    const user = useSelector((state:any)=>state.user);
    return(
        <DashboardContentTitleContainer>
            <DashboardContentTitleContentContainer>
                <DahsboardContentTitleImage src="https://i.scdn.co/image/ab67616d00001e0249d694203245f241a1bcaa72" alt="Dashboard principal image"/>
                <DashboardContentTitleTextContaienr>
                    <span>Lista</span>
                    <DashboardTitleText>Tu top de canciones 2022</DashboardTitleText>
                    <DashboardSubtitle>Tu año en Spotify te muestra las canciones que más te gustaron este año.</DashboardSubtitle>
                    <DahsboardContentTitleSubtitleContainer>

                        <DashboardTitleSubtitle>
                            {(user.image)?<CreatorProfileImage alt="Playlist creator profile photo" src={user.image}/>:null}
                            <b><a>SebGuevara</a></b> <b>·</b> 1 me gusta <b>·</b> 476 canciones, <span>más de 24 h</span></DashboardTitleSubtitle>
                    </DahsboardContentTitleSubtitleContainer>
                </DashboardContentTitleTextContaienr>
            </DashboardContentTitleContentContainer>
        </DashboardContentTitleContainer>
    )
}

export default ContentTitle;