import React from 'react';
import styled from 'styled-components';

const Underline = ({color, width}) => {
    return(    
    <UnderlineStyle  className="divider" color={color} width={width}>
    </UnderlineStyle>
    );
};

export default Underline;

const UnderlineStyle = styled.div`
    width: ${(props) => props.width};
    height: 2px;
    background-color: ${(props) => props.color};
    margin: 20px 0px 40px 45px; 
`;