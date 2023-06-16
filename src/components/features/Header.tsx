import { MainOptionsContainer } from "../common/Containers"
import { MainMenuIcon } from "../common/Icons"
import { HeaderLocation } from "../../interfaces/HeaderProps"
import { HeaderContentButton } from "../common/Buttons"
import { Link } from "react-router-dom"
const Header: React.FC<HeaderLocation> = (props) =>{
    const {location} = props;
    return(
        <MainOptionsContainer>
            <Link to="/">
                <HeaderContentButton color={(location==="Home")?"#FFFFFF":"#B3B3B3"}>
                    {(location==="Home")?<MainMenuIcon icon="fluent:home-24-filled" height="30px"/>:
                    <MainMenuIcon icon="fluent:home-24-regular" height='30px'/>}
                    <span>Inicio</span>
                </HeaderContentButton>
            </Link>
            <Link to="/search">
                <HeaderContentButton color={(location==="Search")?"#FFFFFF":"#B3B3B3"}>
                    {(location!=="Search")?<MainMenuIcon icon="mingcute:search-line" height="30px"/>:
                    <MainMenuIcon icon="mingcute:search-fill" height='30px'/>}
                    <span>Buscar</span>          
                </HeaderContentButton>
            </Link>            
        </MainOptionsContainer>
    )
}

export default Header;