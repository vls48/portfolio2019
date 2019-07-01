import React from 'react';
import H1 from './styles/H1';
import Underline from './styles/Underline';
import styled from 'styled-components';
import ButtonStyle from './styles/ButtonStyle';

const accentColor='#21B89A';
const baseColor='#747474';


const About = () => (
    <>
        <AboutStyle baseColor={baseColor} accentColor={accentColor}>
            <H1 color={baseColor} size="4.5rem;" content="VICTORIA STEWART"></H1>
            <span>design / code / user experience</span>
            <p>hi, im a Philadelphia-based <span>insert many things</span> with a passion for creating experiences- from concept to code</p>
            <p className="tagline">'find me where art and technology collide'</p>
            <Underline buttoncolor={accentColor} color={accentColor} height="1px"></Underline>
            <h2>or just contact me here:</h2>
            <div className="button-cont">
                <ButtonStyle buttoncolor={accentColor} color={accentColor} type="button" onClick="{this.handleClick}">email ❯❯</ButtonStyle>
            </div>

        </AboutStyle>
    </>
);

export default About;

const AboutStyle = styled.div`
    padding: 25px;
    font-family: Roboto;
    h1{
        padding: 0px;
        margin: 0px;
    }
    span{
        color: ${(props) => props.accentColor || 'black'};
        font-weight: 700;
        letter-spacing: 0.045em;
        font-size: 1.2rem;
        padding: 0px 0px 15px 15px;
    }
    p{
        margin: 60px 0px;
        font-weight: 300;
        font-size: 2rem;
        line-height: 53px;
        text-align: center;
        letter-spacing: 0.125em;
        color: #959595;
    }
    .button-cont{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .tagline{
        margin:0px;
    }
    .divider{
        margin: 0px auto;
    }
    h2{
        color: ${(props) => props.baseColor || 'black'};
        font-size: 1rem;
        text-align: center;
        font-weight: 300;
    }
`;