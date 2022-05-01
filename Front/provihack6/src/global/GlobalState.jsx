import { GlobalStateContext } from "./GlobalStateContext";
import { useState } from "react";

const GlobalState = (props) => {
  const [transport, setTransport] = useState("TRANSIT");

  const data = { transport, setTransport };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
