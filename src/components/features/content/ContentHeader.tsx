import { Icon } from "@iconify/react/dist/iconify.js";
import { BackButton, ProfileButton } from "../../common/Buttons";
import { DashboardContentHeaderContainer } from "../../common/Containers"
import { useSelector } from "react-redux";
import { useEffect } from "react"
import { UserProfileImage } from "../../common/Images";

const ContentHeader:React.FC = () => {
    const user = useSelector((state:any) => state.user);
    useEffect(()=>{
        console.log(user);
    },[])
    return(
        <DashboardContentHeaderContainer>
            <BackButton>
                <Icon icon="ep:arrow-left" height="80px" width="80px"/>
            </BackButton>
            <ProfileButton>
                {(user.image)?<UserProfileImage alt="User profile photo" src={user.image}/>:
                <Icon icon="octicon:person-24" />}
            </ProfileButton>
        </DashboardContentHeaderContainer>
    )
}

export default ContentHeader;