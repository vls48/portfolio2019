import styled from 'styled-components';

const ButtonStyle = styled.button`
        width: 165px;
        height: 38px;
        border-color: ${(props) => props.buttoncolor || 'white'};
        border-radius: 5px;
        margin-right: 15px;
        color: ${(props) => props.buttoncolor || 'white'};
        font-size: 0.8rem;
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        font-weight: 400;
        background-color: rgba(255,255,255,0);
        transition: all 0.3s ease-in-out;
    :hover{
        font-weight: 600;
        border-color: ${(props) => props.color};
        background-color: ${(props) => props.color};
        color: white;
        transition: all 0.3s ease-in-out;
    }
`;

export default ButtonStyle;