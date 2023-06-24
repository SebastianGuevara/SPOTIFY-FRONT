import { DashboardContentContainer, DashboardPlaylistContainer, SidebarContainer } from '../components/common/Containers'
import Header from '../components/features/Header';
import Library from '../components/features/PlaylistLibrary';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'

const UserDashboard: React.FC = () =>{
    const location = useLocation();
    const auth = useSelector((state:any) => state.authentication);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!auth.accessToken){
            navigate('/login');
        }
    },[])

    return(
        <DashboardContentContainer>
            <SidebarContainer>
                <Header location = {location.pathname}/>
                <Library/>
            </SidebarContainer>
            <DashboardPlaylistContainer>
            
            </DashboardPlaylistContainer>
        </DashboardContentContainer>
    )
}
export default UserDashboard;