import { useState } from "react";
import { dadosJson } from "../../data/dadosJson";
import { Paragraph, Select, LabelInput } from "./styled";

export default function SelectCo2() {
  const [valueCar, setValueCar] = useState(0);

  const selectCo = () => {
    let arr = [];

    for (let i = 0; i <= 14; i++) {
      arr.push(<option key={i} value={[i]}>{dadosJson.Categoria[i]}</option>);
    }

    return arr;
  };

  const issue = (valueCar) => {
    return dadosJson.Emissoes_gkm[valueCar].toFixed(2);
  };

  return (
    <>
      <LabelInput>Qual o tipo do seu veiculo ?</LabelInput>
      <Select onChange={(e) => setValueCar(e.target.value)}>
        {selectCo()}
      </Select>
      <Paragraph>
        Esse tipo de veículo emite <strong>{issue(valueCar)}g</strong> de CO
        <sub>2</sub> (Gás Carbônico) por kilômetro!
      </Paragraph>
    </>
  );
}
