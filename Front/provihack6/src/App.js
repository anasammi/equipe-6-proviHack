import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./GlobalStyled";
import MapPage from "./Pages/LocationPage/LocationPage";
import PinkAwardPage from "./Pages/AwardPages/PinkAwardPage";
import RedAwardPage from "./Pages/AwardPages/RedAwardPage";
import Router from "./routes/Router";

function App() {
  return (
    <>
    <GlobalState>
      <GlobalStyle />
      <Router/>
      <MapPage />
      <PinkAwardPage /> 
      <RedAwardPage/>
    </GlobalState>
    </>
  );
}

export default App;
