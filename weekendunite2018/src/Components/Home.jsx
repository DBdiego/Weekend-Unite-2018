import React, { Component } from 'react'                    ;
import {Link, Redirect}     from 'react-router-dom'         ;
import teamTexts            from '../teamText.json'         ;
import hogwardsBackground   from './hogwardsBackground.jpg' ;
import logo                 from '../logo.svg'              ;
import '../App.css';


/*

                            <li>
                                <Link to={{pathname:'/games', state:{username:userName, team:teamName}}} >
                                    <button type='button'>JEUX</button>        
                                </Link>
                            </li>

*/
class Home extends Component {

    render() {
        let componentsToRender;
        try {
            const teamName = this.props.location.state.team;
            const userName = this.props.location.state.username;
            const path2pic = '/Harry Potter Characters/'+teamName+'.jpg';
            const teamText = teamTexts[teamName];

            console.log([teamName])
            console.log([path2pic])

            componentsToRender = (
                <div className='Home'>
                    <header className = 'PersonalPageHeader'>
                        <img src={logo} className = 'App-logo' alt='logo' />
                        <ul>
                            <li>
                                <Link to={{pathname:'/home', state:{username:userName, team:teamName}}} >
                                    <button type='button'>EQUIPE</button>        
                                </Link>
                            </li>

                            <li>
                            <Link to={{pathname:'/info', state:{username:userName, team:teamName}}} >
                                    <button type='button'>INFOS PRATIQUE</button>        
                                </Link>
                            </li>

                        </ul>
                        <p className='teamName'> {userName}</p>
                    </header>
                    <div className='Background'>
                        <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className='textAndPicture'>
                        <img src={path2pic} className = 'ProfilePicture' alt='' />

                        <p className='textTitle'> {teamName}</p>
                        <p className='textExplication'> {teamText}</p>
                    </div>
                </div>
            );
        }
        catch (e) {
            componentsToRender =  (<Redirect to={'/intro'} />);
        };
        return componentsToRender

    };
};

export default Home









