import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./GlobalStyled";
import MapPage from "./Pages/LocationPage/LocationPage";
import AwardPage from "./Pages/LastPage/AwardPage";

function App() {
  return (
    <>
    <GlobalState>
      <GlobalStyle />
      {/* <MapPage /> */}
      <AwardPage />
    </GlobalState>
    </>
  );
}

export default App;
