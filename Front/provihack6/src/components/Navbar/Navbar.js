import HomeIcon from '../../assests/home.svg';
import PinIcon from '../../assests/pin-map.svg';
import ShopIcon from '../../assests/shopping-bag.svg';
import { ImgStyled, MainStyle } from './styled';

export default function Navbar () {
    return (
        <MainStyle>
        <ImgStyled src={HomeIcon} alt="Ícone da Home"/>
        <ImgStyled src={PinIcon} alt="Ícone do Mapa"/>
        <ImgStyled src={ShopIcon} alt="Ícone da Loja"/>
        </MainStyle>
    )
}
