import styled from 'styled-components';
import { useNavigate,Link } from "react-router-dom";
import Token from "../context/token.js"
import { useState,useContext, useEffect} from "react";
import { getTransition } from '../services/Services';
import Movimentation from "./Movimentation"

export default function Home(){
    let navigate = useNavigate();
    var saldo = 0;
    const {token} = useContext(Token);
    const [transation,setTransation]=useState([]);
   
    useEffect(() =>{
        
        const config={
            headers: {"Authorization": `Bearer ${token.token}`
        }}

        getTransition(config).then((res) => {
            console.log(res.data)
            setTransation(res.data)
            navigate("/Home")
         
        })
        .catch((res) => {
            alert(res)
        })

    },[saldo])

    for(const movimentation of transation){
        if(movimentation.status ==="debit"){
            saldo -= parseFloat(movimentation.value);
        }
        else{
            saldo += parseFloat(movimentation.value);
        }
    }

return(
<Box>
    <Header>  
        <h1>Olá, {token.name}</h1>
        <ion-icon 
        onClick={() => navigate("/")}
        name="log-out-outline">
            
        </ion-icon>
    </Header>
    <InformationBox>
    {
        transation.length>0 ?
        transation.map((movimentation,index)=> 
        <Movimentation key={index} value={movimentation.value} description ={movimentation.description} type = {movimentation.status} date ={movimentation.date}/>)
        :
        <p>Não há registros de entrada ou saída</p>
    }
    
    {
        transation.length>0 ?
         <Total color={Number(saldo)<= 0 ? 'red' : 'green'}>
             <h1>SALDO</h1>
            <h2>
                {saldo.toFixed(2)}
            </h2>
         </Total>
        :
         <Total>
         </Total>
    }
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
margin: 25px 5%;

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
    width: 33px;
    height: 34px;
    cursor:pointer; 
}
`;

const InformationBox = styled.div`
    margin: 0 auto;
    position: relative;
    background-color: #FFFFFF; 
    min-height: 406px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        display: flex;
        justify-content: center;
        color: #868686;
    }
`;
const Footer=styled.div`
position: absolute;
bottom: 15px;
left:5%;
right: 5%;
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
p{
    color: #FFFFFF; 
    font-weight: bolder;
    text-decoration: none;
}
`;

const Total=styled.div`
display: flex;
position: absolute;
width: 100%;
justify-content: space-between;
padding: 7px 15px;
bottom: 15px;

h1{
    color: #000000;
    font-weight: bolder;
}

h2{
    color: ${(props) => props.color}
}
`;