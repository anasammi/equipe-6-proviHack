import { useContext, useState } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { RadioStyled, IconTransport } from "./styled";
import bus from "../../assests/bus.svg";
import bike from "../../assests/bike.svg";
import car from "../../assests/car.svg";
import carBlack from "../../assests/carBlack.svg";
import busBlack from "../../assests/busBlack.svg";
import bikeBlack from "../../assests/bikeBlack.svg";

export default function RadioButton() {
  const { setTransport } = useContext(GlobalStateContext);
  const [bikeIcon, setBike] = useState(false);
  const [busIcon, setBus] = useState(false);
  const [carIcon, setCar] = useState(false);

  const handleClick = (transport) => {
    setTransport(transport);
    changeIcon(transport);
  };

  const changeIcon = (transport) => {
    if (transport === "TRANSIT") {
      setBus(true);
      setBike(false);
      setCar(false);
    } else if (transport === "BICYCLING") {
      setBus(false);
      setBike(true);
      setCar(false);
    } else if (transport === "DRIVING") {
      setBus(false);
      setBike(false);
      setCar(true);
    }
  };

  return (
    <RadioStyled>
      <p>Escolha o meio de transporte :</p>
      <div>
         
        <IconTransport
          src={busIcon ? busBlack : bus}
          onClick={() => handleClick("TRANSIT")}
        />
         
        <IconTransport
          src={bikeIcon ? bikeBlack : bike}
          onClick={() => handleClick("BICYCLING")}
        />
         
        <IconTransport
          src={carIcon ? carBlack : car}
          onClick={() => handleClick("DRIVING")}
        />
      </div>
    </RadioStyled>
  );
}
