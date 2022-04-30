import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./GlobalStyled";
import MapPage from "./Pages/LocationPage/LocationPage";
import AwardPage from "./Pages/LastPage/AwardPage";
import Router from "./routes/Router";

function App() {
  return (
    <>
    <GlobalState>
      <GlobalStyle />
      <Router/>
      {/* <MapPage />
      <AwardPage /> */}
    </GlobalState>
    </>
  );
}

export default App;
