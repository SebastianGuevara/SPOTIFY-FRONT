import { DashboardContentContainer, DashboardPlaylistContainer, SidebarContainer } from '../components/common/Containers'
import Header from '../components/features/Header';
import Library from '../components/features/PlaylistLibrary';
import { useLocation } from 'react-router-dom';

const UserDashboard: React.FC = () =>{
    const location = useLocation();

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