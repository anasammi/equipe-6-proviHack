import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./GlobalStyled";
import MapPage from "./Pages/LocationPage/LocationPage";
import LastPage from "./Pages/LastPage/AwardPage";

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
