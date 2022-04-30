import { RedMainContainer, TextContainer, MainText, Paragraph, Button, Icon } from "./styledAwardPage";
import icon from "../../assests/eco.png";
import {useNavigate} from "react-router-dom";
import { goToDashboard } from "../../routes/coordinator";

export default function RedAwardPage() {
    const navigate = useNavigate()
  return (
    <RedMainContainer>
      <TextContainer>
        <MainText>
            QUE PENA!<br/>
            Não foi dessa vez que você chegou ao seu destino de forma sustentável. 
        </MainText>
        <Paragraph>
        Sabia que tantos km de carro poluem tantos sei la o q do planeta? Utilizar 
        transporte público ou bicicletas é a melhor opção para uma vida e um mundo mais saudável!
        </Paragraph>
        <MainText> 0 Ponto</MainText>
      </TextContainer>
      <Icon src={icon} />
        <Button onClick={() => goToDashboard(navigate)}>Home</Button>
    </RedMainContainer>
  );
}