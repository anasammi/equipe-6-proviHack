import styled from "styled-components";

export const HeaderStyled = styled.div`
  height: 70px;
  border: 1px solid #e0e0e0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  p {
    font-family: "Archivo", sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
  }
`;

export const ImgHeader = styled.img`
  height: 25px;
  width: 25px;
  left: 3px;
  top: 5.25px;
  border-radius: 0px;
`;
