import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useState} from "react";

export default function Operation(){

    const [values, setValues] = useState({ value: '', description: '' });
      
    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }


return(
    <>
    <Header>
    <h1>Nova saida</h1>
    </Header>
    <Box>
       
        <Forms >
            <Input type="value"  placeholder=" Valor" name='value' onChange={Change} value={values.value}/>
            <Input type="text" placeholder=" Descrição" name='description' onChange={Change} value={values.description}/>
            <button type="submit">
            <Link to="/Home"> <p> Salvar saida</p></Link>
            </button>
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