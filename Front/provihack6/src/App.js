import GlobalState from "./global/GlobalState";
import { GlobalStyle } from "./GlobalStyled";
import Router from "./routes/Router";

function App() {
  return (
      <GlobalState>
        <GlobalStyle />
        <Router />
      </GlobalState>
  );
}

export default App;
