import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./GlobalStyled";
import MapPage from "./Pages/LocationPage/LocationPage";
import LastPage from "./Pages/LastPage/LastPage";

function App() {
  return (
    <>
    <GlobalState>
      <GlobalStyle />
      {/* <MapPage /> */}
      <LastPage />
    </GlobalState>
    </>
  );
}

export default App;
