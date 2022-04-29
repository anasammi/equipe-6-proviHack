import { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { RadioStyled, IconTransport } from "./styled";
import bus from '../../assests/bus.svg';
import bike from '../../assests/bike.svg';

export default function RadioButton(){

    const { transport, setTransport } = useContext(GlobalStateContext); 

    const handleClick = (transport) => {
        setTransport(transport);
    }

    return(
        <RadioStyled>     
          <p>Escolha o meio de transporte :</p>
          <div>
             <IconTransport src={bus} onClick={() => handleClick('TRANSIT')}/>
             <IconTransport src={bike} onClick={() => handleClick('BICYCLING')}/>
          </div>
        </RadioStyled>
    )
}