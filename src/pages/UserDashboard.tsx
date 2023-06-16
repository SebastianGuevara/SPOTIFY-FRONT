import { DashboardContentContainer, DashboardPlaylistContainer, SidebarContainer } from '../components/common/Containers'
import Header from '../components/features/Header';
import Library from '../components/features/PlaylistLibrary';
import { HeaderLocationType } from '../types/HeaderTypes';

const UserDashboard: React.FC = () =>{
    const HEADER_LOCATION: HeaderLocationType = "Home";
    return(
        <DashboardContentContainer>
            <SidebarContainer>
                <Header location= {HEADER_LOCATION}/>
                <Library/>

            </SidebarContainer>
            <DashboardPlaylistContainer>

            </DashboardPlaylistContainer>
        </DashboardContentContainer>
    )
}
export default UserDashboard;