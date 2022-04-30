import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { Image, ImageDiv, Subtitle, Icon, ImageGrid, Product, MainDiv, Points, PointDiv } from "./styled";
import StoreImg from "../../assests/cyclist.png";
import BikeIcon from "../../assests/bike-icon.png";
import TrackIcon from "../../assests/track-icon.png";
import Bell from "../../assests/bike-bell.jpg";
import Helmet from "../../assests/bike-helmet.jpg";
import Basket from "../../assests/headlamp.jpg";
import Wheel from "../../assests/bike-wheel.jpg";

export default function Shop() {
    return (
        <MainDiv>
            <Header name="Loja" />
            <PointDiv>
                <Points>45</Points>
            </PointDiv>
            <Subtitle> Patrocinadores: </Subtitle>
            <ImageDiv>
                <Image src={StoreImg} alt="Imagem dos patrocinadores" />
            </ImageDiv>

            <Subtitle> Categorias | Produtos </Subtitle>

            <ImageGrid>
                <div>
                    <Icon src={BikeIcon} alt="Ícone de ciclista" />
                    <Icon src={TrackIcon} alt="Ícone de track" />
                </div>
                <Product src={Bell} alt="Imagem do produto"/>
                <Product src={Helmet} alt="Imagem do produto" />
                <div></div>
                <Product src={Basket} alt="Imagem do produto"/>

                <Product src={Wheel} alt="Imagem do produto"/>

            </ImageGrid>



            <Navbar isShop="true" />
        </MainDiv>
    )
};