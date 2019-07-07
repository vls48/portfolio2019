import React from 'react';
import styled from 'styled-components';
import H1 from './styles/H1';

const data = {
    title: 'Independence Blue Cross',
    desc: 'Independence is the largest health insurer in the Philadelphia area, serving more than two million people in the region and seven million nationwide.' ,
    headerimg: './img/ibx-head.jpg',
    timeframe: 'April 2018 - September 2018',
    overview: 'In April 2018, I was hired full-time for a 6 month long co-op where I was a member of the IBX user experience team. In this time frame, I reimagined existing digital services for IBX members across platforms, as well as pioneered new products. Each project went through user-focused design method that included initial research, wireframing, usability testing in an iterative process, into eventual high-fidelity wireframes that maintained the company\'s branding. They were then presented to the business for approval and development.',
    problem: 'coming soon',
    process: {
        1: 'coming soon', 
        2: 'coming soon', 
        3: '', 
        4:'',
        5:'', 
        6:'',
        7: ' '},
    solution: {1:'', 
    2:''},
    awards: ''
};

class IBX extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { 
            
        };
      }

    render(){

        const {overview, title, desc, headerimg, timeframe, problem, solution, process, awards}=data

        return(
            <CaseStyles>
            <div className="bg">
                <div className="container">
                    <div className="caseheader">
                        <div className="headerimage">
                            <img
                            src={headerimg} className="head" alt="ibx building"></img>
                        </div>
                        <div className="title">
                            <H1 content={title}></H1>
                            <h3>{timeframe}</h3>
                        </div>
                        <p className="description">
                        " {desc} "
                        </p>
                        <div className="mycontainer">
                            <div className="halfcont myrole">
                            <h2>My Role</h2>
                            <p>
                            User-Experience-Reasearch / Wireframing / High-Fidelity-Mockups / Protoyping / Client-Presentation</p></div>
                            <div className="halfcont mytools">
                                <h2>My Tools</h2>
                                <p>
                                Figma</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="body">
                        <div className="overview">
                            <h2>An Overview</h2>
                            <p>{overview}</p>
                        </div>
                        <div className="process">
                            <h2>Independence Blue Cross Memeber Homepage Redesign</h2>
                            
                            <div className="headerimage">
                            <iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWBInPIPlJ9P7n4zTK4D6PR0V%2Fhomepage%3Fnode-id%3D7%253A0" allowfullscreen></iframe>
                            </div>
                            
                            <div className="headerimage"><iframe title={title} frameborder="0"src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWBInPIPlJ9P7n4zTK4D6PR0V%2Fhomepage%3Fnode-id%3D7%253A1" allowfullscreen></iframe></div>
                        </div>
                        <div className="process">
                            <h2>Benefits Usage</h2>
                            <p>desktop</p>
                            <div className="headerimage">
                            <iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCJ2hEhHEsabW9RJFHSfT4pd8%2FbenefitUsage%3Fnode-id%3D5%253A373" allowfullscreen></iframe>
                            </div>
                            
                            <div className="headerimage"><iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCJ2hEhHEsabW9RJFHSfT4pd8%2FbenefitUsage%3Fnode-id%3D5%253A374" allowfullscreen></iframe></div>
                            <div className="headerimage"><iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCJ2hEhHEsabW9RJFHSfT4pd8%2FbenefitUsage%3Fnode-id%3D5%253A372"
                            allowfullscreen></iframe></div>

                            <p>mobile</p>
                            <div className="headerimage">
                            <iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCJ2hEhHEsabW9RJFHSfT4pd8%2FbenefitUsage%3Fnode-id%3D5%253A376" allowfullscreen></iframe>
                            </div>
                            
                            <div className="headerimage"><iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FCJ2hEhHEsabW9RJFHSfT4pd8%2FbenefitUsage%3Fnode-id%3D5%253A377" allowfullscreen></iframe></div>
                            
                        </div>
                        <div className="process">
                            <h2>'Find a Doctor' Flow Redesign</h2>
                            <div className="headerimage"><iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmZVywIT675SztL35tUpFLc%2FProv-Info-Change-PCP-V2%3Fscaling%3Dscale-down-width%26node-id%3D50%253A241"  allowfullscreen></iframe></div>
                        
                        </div>
                        <div className="process">
                            <h2>Broker Bonus Dashboard</h2>
                            <div className="headerimage"><iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0UT9Wo2afp4hfegDwJeyu2uH%2FbrokerBonus%3Fscaling%3Dscale-down-width%26node-id%3D1%253A879" allowfullscreen></iframe></div>
                            
                        </div>
                        <div className="beyond">
                            <h2>This page is a work in progress, thank you for reading</h2>
                        </div>
                </div>
            </div>
            </CaseStyles>
        )
    }
}

export default IBX;

const CaseStyles = styled.div`

.bg{
    background-color: #0381D5;
    background-size: cover;
    background-position: center;
    margin-top: 25px;
    padding-bottom: 75px;
}

.container{ 
    width: 70%;
    margin: 0px auto;
}
.caseheader{
    width: 100%;
    color: white;
    font-family: 'Roboto', sans-serif;
}

.headerimage{
    position: relative;
    height: 0;
    padding-bottom: 51%;
    width: 100%;
    margin: 15px 0px;
}

.head{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: left;
    top: -25px;
    bottom: 0;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.43);
    -moz-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.43);
    box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.43);
}
.title{
    h1, h3{
        padding: 0px;
        margin-bottom: 0px;
        transition: all 0.3s ease-in-out;
    }

    h3{
        margin: 0px;
        font-weight: 300;
    }
}

.description{
    font-size: 1.6rem;
    font-weight: 500;
    width: 93%;
    margin: 55px auto;
    line-height: 1.8rem;
    text-align: center;
}
.mycontainer{
    border: 1px white solid;
    border-radius: 10px;
    padding: 25px;
    .halfcont{
        width: 50%;
        display: table-cell;
        text-align: center;
    p{
        width: 80%;
        margin: auto;
        word-spacing: 6px;
    }
    }
}

.body{
    color: #0381D5;
    line-height: 24px;

    h2{
        letter-spacing: 0.1em;
        margin-top: 45px;
    }
    img{
        margin: 25px auto;
        width: 100%;
    }
    video{
        margin: 25px auto;
    }
     .highfid1{
        width: 300px;
        margin: 25px auto;
        border-radius: 45px;
        -webkit-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
        -moz-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
        box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
    }
    .highfid{
        width: 300px;
        margin: 25px auto;
        border-radius: 40px;
        -webkit-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
        -moz-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
        box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.33);
    }
    iframe{
        width: 100%;
        height: 100%;
        position: absolute;
        top: -25px;
        bottom: 0;
        border-radius: 10px;
        -webkit-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.43);
        -moz-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.43);
        box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.43);
    }
    .process, .solution{
        width: 100%;
        display: flex;
        column-count: 1;
        flex-direction: column;

    }
    .solution p{
        margin: 0px auto;
    }
    h3{
        width: 65%;
        margin: 10px auto 45px auto;
        text-align: center;
    }
    .beyond h2{
        margin: 45px auto 85px auto;
        text-align: center;
        color: #747474;
        font-size: 1.1rem;
    }
    .beyond div{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .beyond img{
        display: inline-block;
        max-width: 155px;
        height: 100%;
    }
}
@media (max-width: 84em) {
    h1{
        font-size: 4.8rem;
    }   
    .title{
        text-align: center;
    }
    .container{
        width: 80%;
    }
}
@media (max-width: 38em) {
    h1{
        font-size: 3.3rem;
    }   
}
@media (max-width: 26em) {
    h1{
        font-size: 2.5rem;
    }   
}

`;