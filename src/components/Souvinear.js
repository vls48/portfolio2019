import React from 'react';
import styled from 'styled-components';
import H1 from './styles/H1';

const data = {
    title: 'souvinear',
    desc: 'Music has always been one of the strongest facilitators of human connection. Whether it’s a concert you both attend, or a song you both like, music has the potential to bring people together, in one shared experience. Souvinear is a mobile app for music communities. We provide a specific platform for discovering new music & live events, facilitate stronger connections between fans, and promote upcoming artists',
    headerimg: 'https://www.youtube.com/embed/XeaCVDGBhag',
    timeframe: 'September 2017 - Current',
    overview: '',
    problem: 'Despite the feeling of connection music can provide, current services such as Ticketmaster, Apple Music, and Spotify provide no singular place where you can find access to all of these services in one joint experience. Each service only handles one aspect of the overall music experience which can encompass a plethora of applications across different platforms. This leaves us with a disconnected experience— the question becomes how can we combine the music experience to encourage further connection between fans, artists, and venue?',
    process: {
        1: 'We dove into this project knowing that a specialized focus on the user experience was a necessity. We started by defining our core users and audience. We provided surveys that asked questions regarding music listening habits, frequency of concert attendance, and how people connect through music currently. We also talked to active memebers in the local music community to guage their reception of the idea, give us feedback, and point towards defining our target audience. We analyzed this reasearch and created user personas which consolidated the data and gave us a tangible reference point of the different kinds of users we were designing for. At this point, we continued research, reaching back into the pool of potential users we had already accumulated. We had them participate in various other exercises such as card sorting, focus groups, and affinity mapping with the goal of proposing features and defining what users actually wanted out of this experience. Based on the results of these exercises, we analyzed our data and created low-fidelity wireframes. We took these wireframes and began usibility testing while developing a style system. Eventually, we took the developments from both of these processes and created high-fidelity wireframes which included font choices, colors, and UI elements. With a design system in place, we were able to create a style guide which made making alterations and additional screens much easier to do while maintaining the brand that we had developed up to this point. These high fidelity wireframes were turned into a clickable-prototype which was used to do more extensive testing on the app as development started. We decided to start with a web application as proof of concept of the idea. We used Google Maps API, a PHP database, and Angular.js. As design and development progressed, we maintained an agile work process, reiterating upon our designs with new feedback from users each week.',
        2: 'After a proof of concept created, Souvinear moved into native development starting November 2018. We used Apple’s flagship iOS development platform, Xcode & Swift, to write the app. Over the course of the next 6 months, we spent countless hours planning out and building the application using technologies such as Google Maps API, Spotify API, and Firebase. Spotify’s API provided a large library of music for users to pin and swap, while Google Maps API provided a base map for users to update in realtime with hotspots of the events happening around them. Firebase was used to maintain user’s data securely. While heavy development was was underway, we never stopped our original process of reaching out to users, getting feedback, testing or product, and tweaking the direction we were heading. '},
    solution: 'After almost two years of hard work and dedication, we currently have a successful Alpha application, running through Apple’s TestFlight. Souvinear requires an iPhone and Spotify account to download. To celebrate this milestone, we hosted a launch event in the lobby of Westphal College of Media Arts and Design. The event was very successful, with over 100 people in attendance, 70 app downloads, and 50 swapped songs. We had 5 local Philly acts play live music, 2 of them from our very own team. It was an amazing night of celebration and excitement for the launch of our app. Hearing all of the positive feedback mades us very excited for the future of this project.',
    awards: 'Throughout this process we have been lucky enough to have been awarded several awards for our work:'
};

class Souvinear extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { 
            
        };
      }

    render(){

        const {title, desc, headerimg, timeframe, problem, solution, process}=data

        return(
            <CaseStyles>
            <div className="bg">
                <div className="container">
                    <div className="caseheader">
                        <div className="headerimage">
                            <iframe title={title}
                            src={headerimg} frameborder="0" allowfullscreen="">
                            </iframe>
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
                            <h2>my role</h2>
                            <p>
                                branding / user-experience-reasearch / wireframing / high-fidelity-mockups / front-end-development</p></div>
                            <div className="halfcont mytools">
                                <h2>my tools</h2>
                                <p>
                                Swift / Xcode / Google-Maps-API / Spotify-API / Figma / Sketch / Firebase</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="body">
                        <div className="problem">
                            <h2>The Problem</h2>
                            {problem}
                        </div>
                        <div className="process">
                            <h2>The Process</h2>
                            {process[1]}
                            {process[2]}

                        </div>
                        <div className="solution">
                            <h2>Our Solution</h2>
                            {solution}
                        </div>
                        <div className="beyond">

                        </div>
                </div>
            </div>
            </CaseStyles>
        )
    }
}

export default Souvinear;

const CaseStyles = styled.div`

.bg{
    background-image: url('./img/svnr-bg.png');
    background-size: cover;
    background-position: center;
    margin-top: 25px;
    padding-bottom: 75px;
}

.container{ 
    width: 75%;
    margin: 0px auto;
}
.caseheader{
    width: 100%;
    color: white;
    font-family: 'Roboto', sans-serif;
}

.headerimage{
    position: relative;
    display: block;
    width: 100%;
    height: 450px;
}

iframe{
    width: 100%;
    height: 100%;
    position: absolute;
    top: -20px;
    bottom: 0;
    border-radius: 10px;
    -webkit-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.43);
    -moz-box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.43);
    box-shadow: 0px 5px 16px 1px rgba(57,62,97,0.43);
}
.title{
    h1, h3{
        padding: 0px;
        max-width: 50%;
        display: inline-block;
    }
    h3{
        float: right;
    }
}

.description{
    font-size: 0.9rem;
    font-weight: 500;
    width: 90%;
    margin: 35px auto;
    line-height: 1.8rem;
    text-align: center;
}
.mycontainer{
    border: 1px white solid;
    border-radius: 10px;
    padding: 25px;
    .halfcont{
        width: 50%;
        display: inline-block;
        text-align: center;
    p{
        width: 80%;
        margin: auto;
    }
    }
}

.body{
    color: #4E0B70;
    line-height: 24px;

    h2{
        letter-spacing: 0.1em;
        margin-top: 45px;
    }
}

`;