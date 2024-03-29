import React from 'react';
import Underline from './styles/Underline';
import styled from 'styled-components';


const accentColor='#21B89A';
const baseColor='#747474';

class Work extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

        render() {
            
            return (
            <div className="construction">
            <AboutStyle baseColor={baseColor} accentColor={accentColor}>

                <p>this page is under construction</p>
                
                <p className="knowledge learning">coming soon</p>
    
                <Underline buttoncolor={accentColor} color={"#7474742b"} height="1px" width="90%"></Underline>      

            </AboutStyle>
            </div>
        );
    }
}

export default Work;

const AboutStyle = styled.div`
    padding: 0px 25px 25px 25px;
    font-family: Roboto;
    transition: 0.3s all ease-in;
    margin: 0px auto;
    .construction{
        width: 100%;
    }
    h1{
        padding: 0px 0px 0px 25px;
        line-height: 3.7rem;
        width: 20%;
    }
    span{
        color: ${(props) => props.accentColor || 'black'};
        font-weight: 700;
        letter-spacing: 0.045em;
        font-size: 1.1rem;
        padding: 0px 0px 15px 30px;
    }
    span.inlineText {
        color: ${(props) => props.baseColor || 'black'};
        font-weight: 300;
        font-size: 1.7rem;
        padding: 0px 5px;
        position: relative;
    }

    .inlineText img{
        position: absolute;
        bottom: 2px;
    }

    .changingText{
        display: inline-block;
        width: 225px;
        font-size: 1.4rem;
        background-color: #9595951f;
        padding: 0;
        border-radius: 10px;
    }
    p{
        margin: 75px auto 75px auto;
        font-weight: 300;
        font-size: 1.7rem;
        line-height: 53px;
        text-align: center;
        letter-spacing: 0.125em;
        color: #959595;
        width:80%;
    }
    .button-cont{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 10px 25px 5px 0px;
        float: right;
    }
    .tagline{
        margin:0px;
    }
    .divider{
        margin: 0px auto;
    }
    h2{
        color: ${(props) => props.baseColor || 'black'};
        font-size: 1.3rem;
        text-align: center;
        font-weight: 500;
        padding-right: 25px;
    }
    ul{
        list-style: none;
        width: 100%;
        text-align: center;
        margin: 0px;
    }
    ul li{
        font-size: 0.8rem;
        color: #959595;
        min-width: 30px;
        text-align: center;
        border: 1px solid ${(props) => props.accentColor || 'black'};
        display: inline-block;
        padding: 7px 15px;
        margin: 5px 5px;
        border-radius: 5px;
        text-transform: uppercase;
    }

    a img:hover{
        opacity: 0.6;
        transition: 0.3s all ease-in;
    }
    .knowledge{
        color: ${(props) => props.baseColor || 'black'};
        font-size: 1.1rem;
        margin: 20px auto;
        line-height: 20px;
        font-weight: 400;
        letter-spacing: 0.05em;
    }
   p.learning.knowledge{
        font-size: 0.8rem;
        font-weight: 300;
        margin: 6px auto 45px auto;
        line-height: 15px;
    }

    @media (max-width: 84em) {
        transition: 0.3s all ease-in;
        padding: 0px 35px 25px 35px;
        p{
            width: 85%;
        }
        .name{
            margin-top: 45px;
            width: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
        h1, span{
            width: 100%;
            text-align: center;
            padding-lefT: 0px;
        }
        }
        ul{
            padding-left: 0px;
        } 
        .button-cont{
            padding-right: 0;
            display: flex;
            flex-direction: column;
            width: 100%;
        h2, button{
            padding-right: 0px;
            margin-right: 0px;
        }
        button{
            width: 220px;
        }
        img{
            margin: 15px;
        }
        }  
    }
`;