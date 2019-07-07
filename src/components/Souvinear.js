import React from 'react';
import styled from 'styled-components';
import H1 from './styles/H1';

const data = {
    title: 'souvinear',
    desc: 'Music has always been one of the strongest facilitators of human connection. Whether it’s a concert you both attend, or a song you both like, music has the potential to bring people together, in one shared experience. Souvinear is a mobile app for music communities. We provide a specific platform for discovering new music & live events, facilitating stronger connections between fans, and promoting upcoming artists',
    headerimg: 'https://www.youtube.com/embed/XeaCVDGBhag',
    timeframe: 'September 2017 - Current',
    overview: '',
    problem: 'Despite the feeling of connection music can provide, current services such as Ticketmaster, Apple Music, and Spotify provide no singular place where you can find access to all of these services in one joint experience. Each service only handles one aspect of the overall music experience which can encompass a plethora of applications across different platforms. This leaves us with a disconnected experience— the question becomes how can we combine the music experience to encourage further connection between fans, artists, and venue?',
    process: {
        1: 'We dove into this project knowing that a specialized focus on the user experience was a necessity. We started by defining our core users and audience. We provided surveys that asked questions regarding music listening habits, frequency of concert attendance, and how people connect through music currently. We also talked to active memebers in the local music community to guage their reception of the idea, give us feedback, and point towards defining our target audience. We analyzed this reasearch and created user personas which consolidated the data and gave us a tangible reference point of the different kinds of users we were designing for.', 
        2: 'At this point, we continued research, reaching back into the pool of potential users we had already accumulated. We had them participate in various other exercises such as card sorting, focus groups, and affinity mapping with the goal of proposing features and defining what users actually wanted out of this experience. Based on the results of these exercises, we analyzed our data and created low-fidelity wireframes.', 
        3: 'We began usibility testing with these low-fidelity versions of the app while developing a style system in tandem. Eventually, we took the developments from both of these processes and created mid-fidelity digital "grey-box" mockups and then eventually high-fidelity wireframes which included font choices, colors, and UI elements.', 
        4:'With a design system in place, we were able to create a style guide which made making alterations and additional screens much easier to do while maintaining the brand that we had developed up to this point.', 5:'These high fidelity wireframes were turned into a clickable-prototype which was used to do more extensive testing on the app as development started.', 
        6:'We decided to start with a web application as proof of concept of the idea. We used Google Maps API, a PHP database, and Angular.js. As design and development progressed, we maintained an agile work process, reiterating upon our designs with new feedback from users each week.',
        7: 'After a proof of concept created, Souvinear moved into native development starting November 2018. We used Apple’s flagship iOS development platform, Xcode & Swift, to write the app. Over the course of the next 6 months, we spent countless hours planning out and building the application using technologies such as Google Maps API, Spotify API, and Firebase. Spotify’s API provided a large library of music for users to pin and swap, while Google Maps API provided a base map for users to update in realtime with hotspots of the events happening around them. Firebase was used to maintain user’s data securely. While heavy development was was underway, we never stopped our original process of reaching out to users, getting feedback, testing or product, and tweaking the direction we were heading. '},
    solution: {1:'This process led us to the application we have currently. Below are a few videos showcasing some of the bigger features of the final product:', 
    2:'After almost two years of hard work and dedication, we have successfully released an alpha iOS application through TestFlight. To celebrate this milestone, we hosted a launch event in the lobby of Westphal College of Media Arts and Design. The event was very successful, with over 100 people in attendance, 70 app downloads, and 50 swapped songs. We had 5 local Philly acts play live music, 2 of them from our very own team. It was an amazing night of celebration and excitement for the soft launch of our app. Hearing the positive feedback made us very excited for the future of this project.'},
    awards: 'Throughout this process we have been lucky enough to have been recognized with several awards:'
};

class Souvinear extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { 
            
        };
      }

    render(){

        const {title, desc, headerimg, timeframe, problem, solution, process, awards}=data

        return(
            <CaseStyles>
            <div className="bg">
                <div className="container">
                    <div className="caseheader">
                        <div className="headerimage">
                            <iframe title={title}
                            src={headerimg} frameborder="0" allowfullscreen>
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
                                Branding  /  User-Experience-Reasearch  /  Wireframing  /  High-Fidelity-Mockups  /  All-Front-End-Development</p></div>
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
                        <div className="overview">
                            <h2>An Overview</h2>
                            <p>Souvinear is a iOS proximity-based music application that began as a student project in 2017. Since that point, our team has doubled in size, we've joined an entrepenuership incubator, threw a concert for our alpha launch, and won a few awards. Here's how we got there.</p>
                        </div>
                        <div className="problem">
                            <h2>The Problem</h2>
                            {problem}
                        </div>
                        <div className="process">
                            <h2>The Process</h2>
                            <p>{process[1]}</p>
                            <video loop muted autoPlay width="100%"  name="surveying" src="./img/surveys.mov"></video>
                            <p>{process[2]}</p>
                            <img width="100%" src="./img/lowfid.png" alt="low fidelity wireframes" ></img>
                            <p>{process[3]}</p>
                            <p>{process[4]}</p>
                            <div className="headerimage"><iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FR22UthMBhhNt8wS3PK1YIiNJ%2FUser-Test-Document%3Fnode-id%3D257%253A1116" allowfullscreen></iframe></div>
                            <p>{process[5]}</p>
                            <div className="headerimage"><iframe title={title} frameborder="0" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FR22UthMBhhNt8wS3PK1YIiNJ%2FUser-Test-Document%3Fscaling%3Dscale-down%26node-id%3D42%253A3148" allowfullscreen></iframe></div>
                            <p>{process[6]}</p>
                            <p>{process[7]}</p>
                            <video loop muted autoPlay width="100%" name="surveying" src="./img/usertesting.mp4"></video>
                        </div>
                        <div className="solution">
                            <h2>The Result</h2>
                            <p>{solution[1]}</p>
                            <video className="highfid" loop muted autoPlay src="./img/pinasong.mp4" alt="pin a song demo" ></video>
                            <h3>Using the Spotify API, users pin their favorite song at the moment to their profile to be shared with other users.</h3>
                            <video className="highfid" loop muted autoPlay src="./img/findhotspot.mp4" alt="find hotspot demo" ></video>
                            <h3>Users can explore the map page which shows them details of local events happening around them. When a user physically enters this spot their song is left behind and they pick up the songs of other users that are there.</h3>
                            <video className="highfid" loop muted autoPlay src="./img/createhotspot.mp4" alt="find hotspot demo" ></video>
                            <h3>Users can easily create their own hotspots if they are hosting an event such as a house show, or even just want to see what those around them are listening to.</h3>
                            <video className="highfid" loop muted autoPlay src="./img/browsemusic.mp4" alt="find hotspot demo" ></video>
                            <h3>Users can then browse to the songs that they picked up throughout the city. If a user is not feeling a song they picked up, they can swipe up to discard it. If they like a song, they can swipe down to save it to their collection. Collected songs can then be exported back out to Spotify in the form of a 'Souvinear Discovered Songs' playlist.</h3>
                            <p>{solution[2]}</p>
                        </div>
                        <div className="beyond">
                            <p>{awards}</p>
                            <div>
                            <img src="./img/muse.png" alt="muse award" ></img>
                         
                            <img src="./img/gdusa.png" alt="gdusa" ></img>
                            <img src="./img/swift.png" alt="swift fund grant" ></img>
                            </div>

                            <h2>Thank you for reading</h2>
                        </div>
                </div>
            </div>
            </CaseStyles>
        )
    }
}

export default Souvinear;

const CaseStyles = styled.div`
transition: 0.3s all ease-in-out;
.bg{
    background-image: url('./img/svnr-bg.png');
    background-size: cover;
    background-position: center;
    background-color: purple;
    margin-top: 50px;
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
    font-size: 0.9rem;
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
    color: #4E0B70;
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
@media (max-width: 64em) {
    h1{
        font-size: 5.5rem;
    }
}
@media (max-width: 38em) {
    h1{
        font-size: 3.5rem;
    }
}
`;