import React from 'react';
import styled from 'styled-components';

const SocialMedia = () => (
    <PlaceholderCont>
        <PlaceholderImage></PlaceholderImage>
        <PlaceholderImage></PlaceholderImage>
        <PlaceholderImage></PlaceholderImage>
    </PlaceholderCont>
);

const PlaceholderCont = styled.div`
background-color: lightgrey;
width: 100%;
display: flex;
justify-content: center;
`;

const PlaceholderImage = styled.div`
background-color: grey;
width: 50px;
height: 50px;
padding: 15px;
margin: 10px;
`;
export default SocialMedia;