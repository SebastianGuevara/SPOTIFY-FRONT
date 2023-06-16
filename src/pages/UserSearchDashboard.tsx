import { DashboardContentContainer, DashboardPlaylistContainer, SidebarContainer } from '../components/common/Containers'
import Header from '../components/features/Header';
import PlaylistLibrary from '../components/features/PlaylistLibrary';
import { HeaderLocationType } from '../types/HeaderTypes';


const UserSearchDashboard: React.FC = () =>{
    const HEADER_LOCATION: HeaderLocationType = "Search";
    return(
        <DashboardContentContainer>
            <SidebarContainer>
                <Header location={HEADER_LOCATION}/>
                <PlaylistLibrary/>
            </SidebarContainer>
            <DashboardPlaylistContainer>

            </DashboardPlaylistContainer>
        </DashboardContentContainer>
    )
}

export default UserSearchDashboard