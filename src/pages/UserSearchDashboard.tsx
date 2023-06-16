import { DashboardContentContainer, DashboardPlaylistContainer, PlaylistLibraryContainer, SidebarContainer } from '../components/common/Containers'
import Header from '../components/features/Header';
import { HeaderLocationType } from '../types/HeaderTypes';


const UserSearchDashboard: React.FC = () =>{
    const HEADER_LOCATION: HeaderLocationType = "Search";
    return(
        <DashboardContentContainer>
            <SidebarContainer>
                <Header location={HEADER_LOCATION}/>
                <PlaylistLibraryContainer>
                    
                </PlaylistLibraryContainer>

            </SidebarContainer>
            <DashboardPlaylistContainer>

            </DashboardPlaylistContainer>
        </DashboardContentContainer>
    )
}

export default UserSearchDashboard