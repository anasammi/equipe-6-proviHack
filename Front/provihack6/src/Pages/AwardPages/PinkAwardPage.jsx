import {
  PinkMainContainer,
  TextContainer,
  MainText,
  Paragraph,
  Button,
  Icon,
} from "./styledAwardPage";
import icon from "../../assests/eco.png";
import { useNavigate } from "react-router-dom";
import { goToDashboard } from "../../routes/coordinator";

export default function PinkAwardPage() {
  const navigate = useNavigate();
  return (
    <PinkMainContainer>
      <TextContainer>
        <MainText>
          PARABÉNS!
          <br />
          Você chegou ao seu destino de forma sustentável!
        </MainText>
        <Paragraph>
          Com base na sua disciplina, disposição e vontade de mudar o mundo para
          melhor, você merece muito. Por isso, presenteamos você com alguns
          pontos! Continue sempre assim para ganhar mais pontos e transformar o
          mundo.
        </Paragraph>
        <MainText>+ 1 Ponto</MainText>
      </TextContainer>
      <Icon src={icon} alt="ícone planta com coração na cor branca"/>
      <Button onClick={() => goToDashboard(navigate)}>Home</Button>
    </PinkMainContainer>
  );
}
