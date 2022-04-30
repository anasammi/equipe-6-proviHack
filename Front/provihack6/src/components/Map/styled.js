import styled from "styled-components";

export const MapStyled = styled.div`
  padding: 0;
  margin: 0;
  height: 70vh;
`;

export const DivKm = styled.div`
    display: flex;
    justify-content: space-around;

    p{
      font-family: "Archivo";
      font-size: 18px;
    }
`

export const Address = styled.div`
  box-sizing: border-box;
  width: 90%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); */
  font-size: 14px;
  margin: 0px auto;
`;

export const AddressField = styled.input`
  box-sizing: border-box;
  border: 1px solid transparent;
  width: 100%;
  height: 50px;
  margin: 0 8px 8px 8px;
  padding: 0 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  outline: none;
  text-overflow: ellipses;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  position: static;
  width: 145px;
  top: 0%;
  bottom: 0%;
  background: #000000;
  color: white;
  font-size: 16px;
  font-family: "Archivo";
  font-weight: 500;
  border-radius: 8px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 3px auto;
  `;

export const DivButtons = styled.div`
  display: flex;
`