import React from 'react';
import styled from 'styled-components';

const Underline = ({color, width, height}) => {
    return(    
    <UnderlineStyle  className="divider" color={color} width={width} height={height}>
    </UnderlineStyle>
    );
};

export default Underline;

const UnderlineStyle = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height || "2px"};
    background-color: ${(props) => props.color};
    margin: 20px 0px 40px 45px; 
`;