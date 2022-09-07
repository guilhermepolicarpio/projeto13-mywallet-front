import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function Login(){

    const [values, setValues] = useState({ email: '', password: '' });
      
    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    return(
        <Box>
            <h1>My Wallet</h1>
            <Forms >
                <Input type="email"  placeholder=" E-mail" name='email' onChange={Change} value={values.email}/>
                <Input type="password" placeholder=" Senha" name='password' onChange={Change} value={values.password}/>
                <button type="submit">
                <Link to="/Home"> <p> Entrar</p></Link>
                </button>
            </Forms>
            <Link to="/Registration"><h3>Primeira vez? Cadastre-se!</h3></Link>
        </Box>
        
    )
}

const Box = styled.div`

display: flex;
flex-direction: column;
align-items: center;


h1{
font-family: 'Saira Stencil One', cursive;
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 50px;
margin: 147px 0px 24px 0px;
color: #FFFFFF;
}


h3{
padding: 20px;
text-align: center;
color: #FFFFFF;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
}

h3:hover{
text-decoration: underline ;
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