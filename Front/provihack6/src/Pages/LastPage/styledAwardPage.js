import styled from "styled-components";

export const MainContainer = styled.div`
    background-color: #F673AD;
    width: 100vw;
    height: 100vh;
    color: #000000;
    font-family: Archivo, sans-seriff;
    text-align: left;
    display: flex;
    flex-direction: column;
`;

export const MainText = styled.h2`
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 900;   
`;

export const Paragraph = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;  
`;

export const TextContainer = styled.div`
  width: 90vw;
  height: 65vh;
  padding-left: 1.5rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Icon = styled.img`
    width: 4em;
    margin-left: 1.5rem;
    margin-top: 1rem;
    color: white
`

export const Button = styled.button`
    width: 10em;
    height: 3em;
    background-color: #000000;
    color: white;
    border: none;
    border-radius: 8px;
    margin-top: 2rem;
    margin-left: 1.5rem;
`