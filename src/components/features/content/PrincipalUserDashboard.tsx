import Color from "color-thief-react"
import { DashboardContentContainer } from "../../common/Containers"
import ContentTitle from "./ContentTitle"
import ContentHeader from "./ContentHeader"
import ContentPlaylistTracks from "./ContentPlaylistTracks"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import placeholder from "../../../assets/placeholder1.png"

const PrincipalUserDashboard:React.FC = () =>{
    const location = useLocation();
    const [colorBackgroundImage, setColorBackgroundImage] = useState(placeholder)
    return(
        <>
            {('/'!== location.pathname && '/search' !== location.pathname)?<Color format='hex' crossOrigin="anonymous" src={colorBackgroundImage}>
                {({data})=>(
                    <DashboardContentContainer color={data}>
                        <ContentHeader/>
                        <ContentTitle setBackgroundColorImage={setColorBackgroundImage}/>
                        <ContentPlaylistTracks/>
                    </DashboardContentContainer>
                )}
            </Color>:null}
            {('/'===location.pathname)?<DashboardContentContainer color="#211840">

            </DashboardContentContainer>:null}
            {('/search'===location.pathname)?<DashboardContentContainer color="#121212">

            </DashboardContentContainer>:null}
        </>

    )
}

export default PrincipalUserDashboard;