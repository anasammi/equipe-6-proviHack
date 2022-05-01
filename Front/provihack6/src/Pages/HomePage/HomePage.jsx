import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToSignUp } from "../../routes/coordinator";
import { TitleHome, BottonDiv, PrimaryDiv } from "./styled";

export default function HomePage() {
  const [divAlert, setDivAlert] = useState(false);

  const navigate = useNavigate();

  const handleButton = () => {
    setDivAlert(!divAlert);
  };

  const alert = (
    <div className="alert alert-primary" role="alert">
      Escolha meios de transportes menos poluentes para ir ao seu destino e
      ganhe pontos para trocar por produtos em nossas lojas parceiras! Além de
      manter-se saudável =)
    </div>
  );

  return (
    <PrimaryDiv>
      <TitleHome>
        Que tal ajudar a salvar o meio ambiente e ainda ganhar vantagens com
        isso ?
      </TitleHome>
      <BottonDiv>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleButton()}
        >
          Me mostre como
        </button>
        {divAlert ? alert : null}
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => goToLogin(navigate)}
        >
          Login
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => goToSignUp(navigate)}
        >
          Cadastre-se
        </button>
      </BottonDiv>
    </PrimaryDiv>
  );
}
