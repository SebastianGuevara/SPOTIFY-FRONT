import { DashboardContentContainer, DashboardPlaylistContainer, MainOptionsContainer, PlaylistLibraryContainer, SidebarContainer } from '../components/common/Containers'

const UserDashboard = () =>{
    return(
        <DashboardContentContainer>
            <SidebarContainer>
                <MainOptionsContainer>

                </MainOptionsContainer>
                <PlaylistLibraryContainer>
                    
                </PlaylistLibraryContainer>

            </SidebarContainer>
            <DashboardPlaylistContainer>

            </DashboardPlaylistContainer>
        </DashboardContentContainer>
    )
}

export default UserDashboard;