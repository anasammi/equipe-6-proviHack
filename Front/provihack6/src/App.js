import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./GlobalStyled";
import MapPage from "./Pages/LocationPage/LocationPage";

function App() {
  return (
    <>
    <GlobalState>
      <GlobalStyle />
      <MapPage />
    </GlobalState>
    </>
  );
}

export default App;
