import React from 'react';
import styled from 'styled-components';

const H1 = ({content, color, size}) => {
    return(    
    <H1Style color={color} size={size}>
        {content}
    </H1Style>
    );
};

export default H1;

const H1Style = styled.h1`
    z-index: 1;
    font-size: ${(props) => props.size || '7.5rem'};
    color: transparent;
    margin: 0;
    padding: 45px 45px 10px 45px;
    width: 100%;
    font-family: 'Roboto',sans-serif;
    font-weight: 700;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${(props) => props.color || 'white'};
    letter-spacing: 0.025em;
`;