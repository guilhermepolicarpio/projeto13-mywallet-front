import styled from "styled-components";

export default function Movimentation({value, description, type}){

    return(
     <Box>
        <Description>
            <h1>{description}</h1>
        </Description>
        <Value>
            <h2>{value}</h2>
        </Value>
    </Box>
    )
}

const Box = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size:16px;
`

const Description = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size:16px;
`

const Value = styled.p`
color: ${props => props.color ? "03AC00" : "C70000"}
`