import { Icon } from "@iconify/react/dist/iconify.js";
import { PlayPlaylistButton } from "../../common/Buttons";
import { DashboardContentPlayContainer, DashboardContentPlayerContainer } from "../../common/Containers"
import { HeartIcon } from "../../common/Icons";

const ContentPlaylistTracks = () =>{
    return (
        <DashboardContentPlayerContainer>
            <DashboardContentPlayContainer>
                <PlayPlaylistButton>
                    <Icon icon="teenyicons:play-solid" width="28px"/>
                </PlayPlaylistButton>
                <HeartIcon icon="iconamoon:heart-light" width="45px"/>
            </DashboardContentPlayContainer>
        </DashboardContentPlayerContainer>
    )
}

export default ContentPlaylistTracks;