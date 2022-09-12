import styled from "styled-components";

export default function Movimentation({value, description, type,date}){

    return(
     <Box>
        <Description>
            <h1>{date} </h1>
            <h2>{description}</h2>
        </Description>
        <Value type ={type}>
            {value.replace(".",",")}
        </Value>
    </Box>
    )
}

const Box = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size:16px;
padding: 7px 15px;

h1{
    color:#C6C6C6;
    margin-right: 10px;
}
`
const Description = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size:16px;
`
const Value = styled.td`
color: ${props => (props.type==="credit") ? "#03AC00" : "#C70000"}
`