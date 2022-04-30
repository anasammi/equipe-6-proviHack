import { useNavigate } from 'react-router-dom';
import HomeIcon from '../../assests/home.svg';
import PinIcon from '../../assests/pin-map.svg';
import ShopIcon from '../../assests/shopping-bag.svg';
import { goToDashboard, goToLocation, goToShop } from '../../routes/coordinator';
import { ImgStyled, MainStyle } from './styled';

export default function Navbar () {

    const navigate = useNavigate();

    return (
        <MainStyle>
        <ImgStyled src={HomeIcon} alt="Ícone da Home" onClick={() => goToDashboard(navigate)}/>
        <ImgStyled src={PinIcon} alt="Ícone do Mapa" onClick={() => goToLocation(navigate)}/>
        <ImgStyled src={ShopIcon} alt="Ícone da Loja" onClick={() => goToShop(navigate)}/>
        </MainStyle>
    )
}
