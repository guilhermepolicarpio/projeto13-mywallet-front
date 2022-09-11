import styled from 'styled-components';
import { Link } from "react-router-dom";
import Token from "../context/token.js"
import { useState,useContext} from "react";

export default function Home(){
    const {token,setToken} = useContext(Token);
    console.log(token)
return(
<Box>
    <Header>  
        <h1>Olá, {token.name}</h1>
        <ion-icon name="log-out-outline"></ion-icon>
    </Header>
    <InformationBox>
        <p>Não há registros de entrada ou saída</p>
    </InformationBox>
    <Footer>
        <Operation>
        <ion-icon name="add-circle-outline"></ion-icon>
        <Link to="/Credit"><p>Nova entrada</p></Link>
        </Operation>
        <Operation>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <Link to="/Debit"><p>Nova saída</p></Link>
        </Operation>
    </Footer>
</Box>
)
}
const Box = styled.div`
display: flex;
flex-direction: column;

`;

const Header = styled.div`

display: flex;
justify-content: space-between;
padding: 25px 5%;

h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
}

ion-icon{
    color: #FFFFFF; 
    width: 23px;
    height: 24px;
}
`;

const InformationBox = styled.div`
    margin: 0 auto;
    background-color: #FFFFFF; 
    min-height: 446px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;
    }
`;
const Footer=styled.div`

margin: 0 auto;
width: 90%;
display: flex;
justify-content: space-between;
`;

const Operation = styled.div`
width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 10px;
ion-icon{
color: #FFFFFF; 
width: 23px;
height: 24px;
}
`;