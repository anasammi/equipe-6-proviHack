import styled from 'styled-components';

export const MainDiv = styled.div`
    margin-bottom: 10vh;
`

export const Subtitle = styled.h3`
    margin: 20px;
    font-family: "Archivo";
`

export const PointDiv = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`

export const Points = styled.p`
    font-size: 30px;
    font-family: "Archivo";
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 8px solid lightgreen;
    border-radius: 50%;
`

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
`

export const Image = styled.img`
    width: 90vw;
    display: flex;
    justify-content: center;
    border-radius: .8em;
`

export const Icon = styled.img`
    width: 70px;
    height: 70px;
    margin: 3px 20px;
    padding: 10px;
    background: rgb(138,129,129);
    background: linear-gradient(90deg, rgba(138,129,129,1) 0%, rgba(209,209,209,1) 41%, rgba(230,230,230,1) 100%);
`

export const ImageGrid= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    width: 98vw;
`

export const Product = styled.img`
    height: 170px;
    /* width: 120px; */
    max-width: 30vw;
    background: lightgrey;
    border-radius: .8em;
    margin: 10px;
    object-fit: cover;
`