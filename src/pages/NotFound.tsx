import { NotFoundContainer } from "../components/common/Containers"
import { NotFoundLogo } from "../components/common/Images"
import LOGO from "../assets/notFoundLogo.svg"
import { NotFoundButton } from "../components/common/Buttons"
import { HelpNotFountText, NotFountSubTitle } from "../components/common/Text"
import { Link } from "react-router-dom"

const NotFound: React.FC = () => {
    const SPOTIFY_SUPPORT_LINK = "https://support.spotify.com/co-es/";
    return(
        <NotFoundContainer>
            <NotFoundLogo alt="Spotify Logo" src={LOGO}/>
            <h1>Página no encontrada</h1>
            <NotFountSubTitle> No encontramos la página que buscas.</NotFountSubTitle>
            <Link to="/">
                <NotFoundButton>Inicio</NotFoundButton>
            </Link>
            <HelpNotFountText href={SPOTIFY_SUPPORT_LINK}>Ayuda</HelpNotFountText>
        </NotFoundContainer>
    )
}

export default NotFound