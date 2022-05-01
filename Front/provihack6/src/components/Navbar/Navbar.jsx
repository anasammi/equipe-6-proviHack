import { useNavigate } from "react-router-dom";
import HomeIcon from "../../assests/home.svg";
import PinIcon from "../../assests/pin-map.svg";
import ShopIcon from "../../assests/shopping-bag.svg";
import HomeFilled from "../../assests/home-black.svg";
import PinFilled from "../../assests/pin-black.svg";
import ShopFilled from "../../assests/shopping-black.svg";
import {
    goToDashboard,
    goToLocation,
    goToShop,
} from "../../routes/coordinator";
import { ImgStyled, MainStyle } from "./styled";

export default function Navbar({ isHome, isMap, isShop }) {
    const navigate = useNavigate();

    return (
        <MainStyle>
            <ImgStyled
                src={isHome ? HomeFilled : HomeIcon}
                alt="Ícone da Home"
                onClick={() => goToDashboard(navigate)}
            />
            <ImgStyled
                src={isMap ? PinFilled : PinIcon}
                alt="Ícone do Mapa"
                onClick={() => goToLocation(navigate)}
            />
            <ImgStyled
                src={isShop ? ShopFilled : ShopIcon}
                alt="Ícone da Loja"
                onClick={() => goToShop(navigate)}
            />
        </MainStyle>
    );
}
