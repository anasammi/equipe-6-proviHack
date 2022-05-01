import styled from "styled-components";
import grama from "../../assests/grama.png";

export const PrimaryDiv = styled.div`
  height: 100vh;
  background-image: url(${grama});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  background-attachment: fixed;
`;

export const TitleHome = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding: 5px 0;
  font-weight: 500;
  font-family: "Archivo";
  font-size: 2.4em;
`;

export const BottonDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  button {
    width: 50%;
    margin: 10px auto;
  }
`;
