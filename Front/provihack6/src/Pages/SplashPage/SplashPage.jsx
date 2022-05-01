import logo from "../../assests/logo-splash.png";
import { MainStyled } from "./styledSplashPage";

export const SplashPage = () => {
  return (
    <MainStyled>
      <div>
        <img src={logo} alt="Logotipo do produto"/>
      </div>
    </MainStyled>
  );
};
