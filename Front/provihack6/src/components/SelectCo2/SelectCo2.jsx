import { useState } from "react";
import { dadosJson } from "./dadosJson";

export default function SelectCo2() {

    const [valueCar, setValueCar] = useState(0);

    const selectCo = () => {

        let arr =[];
   
           for(let i=0; i<=14; i++){
              arr.push(<option value={[i]}>{dadosJson.Categoria[i]}</option>)
           }
   
           return arr;
   }


   const issue = (valueCar) => {
        return dadosJson.Emissoes_gkm[valueCar].toFixed(2);
   }


  return (
    <>
      <h3>Qual o tipo do seu veiculo ?</h3>
      <select onChange={(e) => setValueCar(e.target.value)}>{selectCo()}</select>
      <h4>Esse tipo de veículo emite {issue(valueCar)}g de CO<sub>2</sub> (Gás Carbônico) por kilômetro !</h4>
    </>
  );
}
