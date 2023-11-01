import styled from "styled-components";

export const Title = styled.h1`
    color: #d83131;
    text-align: center;
    font-family: Alkatra;
`;

export const TableC= styled.table`
    border-collapse: collapse;
    margin: auto;
    font-size: 0.9em;
    font-family: Alkatra;
    width: 90%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`; 
export const Tr= styled.tr`
    border-bottom: 1px solid #dddddd;
    border-radius:15px;

    
    &:nth-of-type(even){
        background-color: #f3f3f3;
    }

    &:hover{
        background-color: #f8ecec;
    }

`;

export const Th= styled.th`
    background-color: #d83131 ;
    color: #ffffff;
    text-align: left;
    height: 7vh;
    font-size:1.2rem;

    &:first-of-type{
        border-top-left-radius: 10px;
    }

    &:last-of-type{
        border-top-right-radius: 10px;
    }

`;

export const Td= styled.td`
    padding: 12px 15px;
    text-align: left;
`;

export const Div=styled.div`
    display: flex;
    border: 1px #d83131 solid;
    justify-content: center;
    padding:2vh;
    margin:1vh;
    border-radius:10px;
    font-family: Alkatra;
    align-items: center;
`;

export const SumP = styled.p`
    padding: 1vw;
    font-size: 4vh;
    color: #f02828;
`;

export const Button = styled.button`
    height: 5vh;
    color:#ffffff;
    background-color: #d83131 ;
    border-radius: 10px;
    border: none;
    padding: 10px;
    margin: 1vw;
    font-family:Alkatra;

    &:hover{
        background-color: #e26969 ;
    }

`;

export const Input = styled.input`
    height: 3vh;
    border-radius:10px;
    border:1px solid #d83131;
    font-size:1em;
    font-family:Alkatra;
    padding:1vh;
`;
