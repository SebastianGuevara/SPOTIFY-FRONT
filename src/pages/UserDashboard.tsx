import { DashboardContentContainer, DashboardPlaylistContainer, PlaylistLibraryContainer, SidebarContainer } from '../components/common/Containers'
import Header from '../components/features/Header';
import { HeaderLocationType } from '../types/HeaderTypes';

const UserDashboard: React.FC = () =>{
    const HEADER_LOCATION: HeaderLocationType = "Home";
    return(
        <DashboardContentContainer>
            <SidebarContainer>
                <Header location= {HEADER_LOCATION}/>
                <PlaylistLibraryContainer>
                    
                </PlaylistLibraryContainer>

            </SidebarContainer>
            <DashboardPlaylistContainer>

            </DashboardPlaylistContainer>
        </DashboardContentContainer>
    )
}

export default UserDashboard;