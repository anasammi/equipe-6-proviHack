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
        Sabia que a cada quilômetro um carro popular emite o equivalente a 150
        gramas de CO2? Dois dias andando de carro emitem tantos poluentes
        quanto um mês de metrô. Utilizar transporte público ou bicicletas é a
        melhor opção para uma vida e um mundo mais sustentáveis!
        </Paragraph>
        <MainText> 0 Ponto</MainText>
      </TextContainer>
      <Icon src={icon} />
        <Button onClick={() => goToDashboard(navigate)}>Home</Button>
    </RedMainContainer>
  );
}