import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useState,useContext } from "react";
import { debit } from '../services/Services';
import { useNavigate } from "react-router-dom";
import {ThreeDots} from "react-loader-spinner"
import Token from "../context/token.js"

export default function Debit(){

    let navigate = useNavigate();
    const {token,setToken} = useContext(Token);
    const [values, setValues] = useState({ value: '', description: '' });
    const [loading,setLoading]=useState(false);
      
    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    function sendDebit(e){
        const config={
            headers: {"Authorization": `Bearer ${token.token}`
        }}

        e.preventDefault();
        setLoading(true)
        console.log(values)
        debit(values,config).then((res) => {
            console.log(res)
            navigate("/Home")
        })
    
          .catch((res) => {
            alert(res.response.data)
            setLoading(false)
        })
    }

return(
    <>
    <Header>
    <h1>Nova saida</h1>
    </Header>
    <Box>
       
    <Forms onSubmit={(e) => sendDebit(e)}>
            <Input type="value"  placeholder=" Valor" name='value' onChange={Change} value={values.value}/>
            <Input type="text" placeholder=" Descrição" name='description' onChange={Change} value={values.description}/>
            {!loading? 
        <button type="submit">
             <p> Salvar saída</p>
        </button>
        :
        <ThreeDots color="white" height={40} width ={40}/>
        }

        </Forms>
    </Box>
    </>
)
}
const Box = styled.div`

display: flex;
flex-direction: column;
align-items: center;
`;

const Header = styled.div`

padding: 5% 14%;

h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
}

`;

const Forms = styled.form`

display: flex;
flex-direction: column;
align-items: center;
width: 72%;

button{
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 52px;
font-size: 19.976px;
line-height: 25px;
border: 1px solid #A328D6;;
background: #A328D6;
border-radius: 8px;
cursor:pointer; 
text-decoration: none;
}
p{
color:white;

}
`;

const Input= styled.input`
display: flex;
justify-content: center;
width:100%;
height:45px;
color: #DBDBDB;
font-size: 19.976px;
line-height: 25px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 8px;
margin-bottom: 15px;

`;