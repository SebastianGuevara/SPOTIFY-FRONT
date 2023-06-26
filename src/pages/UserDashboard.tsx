import { DashboardContainer, DashboardContentContainer, SidebarContainer } from '../components/common/Containers'
import Header from '../components/features/Header';
import Library from '../components/features/library/PlaylistLibrary';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import ContentHeader from '../components/features/content/ContentHeader';
import ContentTitle from '../components/features/content/ContentTitle';
import { getUserData } from '../services/GetUserData';
import { setNewAccesToken } from '../redux/slices/AuthenticationSlice';
import { setUserData } from '../redux/slices/UserSlice';

const UserDashboard: React.FC = () =>{
    const location = useLocation();
    const dispatch = useDispatch();
    const auth = useSelector((state:any) => state.authentication);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!auth.accessToken){
            navigate('/login');
        }
        else if(auth.accessToken && auth.refreshToken){
            handleUpdateUserData(auth.accessToken,auth.refreshToken);
        }
    },[])
    
    const handleUpdateUserData = async (accessToken:String, refreshToken:String)=>{
        const user = await getUserData(accessToken, refreshToken);
        if('newAccessToken' in user){
            dispatch(setNewAccesToken({accessToken: user.newAccessToken}))
            handleUpdateUserData(user.newAccessToken, refreshToken);
        }
        else{
            const { id,display_name,email,followers,images } = await getUserData(accessToken, refreshToken);
            if(images[0]){
                dispatch(setUserData({id: id, name: display_name, email: email, followers: followers.total, image:images[0].url}));
            }
            else{
                dispatch(setUserData({id: id, name: display_name, email: email, followers: followers.total, image:null}));
            }
            
        }
    }

    return(
        <DashboardContainer>
            <SidebarContainer>
                <Header location = {location.pathname}/>
                <Library/>
            </SidebarContainer>
            <DashboardContentContainer>
                <ContentHeader/>
                <ContentTitle/>
            </DashboardContentContainer>
        </DashboardContainer>
    )
}
export default UserDashboard;