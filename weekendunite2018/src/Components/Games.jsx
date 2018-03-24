import React, { Component } from 'react'                    ;
import {Link, Redirect}     from 'react-router-dom'         ;
import hogwardsBackground   from './hogwardsBackground.jpg' ;
import logo                 from '../logo.svg'              ;
import '../App.css';



class Games extends Component {

    render() {
        let componentsToRender;

        try{

            const teamName = this.props.location.state.team;
            const userName = this.props.location.state.username;

            componentsToRender = (
                <div className='Games'>
                    <header className = 'PersonalPageHeader'>
                        <img src={logo} className = 'App-logo' alt='logo' />
                        <ul>
                            <li>
                                <Link to={{pathname:'/home', state:{username:userName, team:teamName}}} >
                                    <button type='button'>EQUIPE</button>        
                                </Link>
                            </li>

                            <li>
                                <Link to={{pathname:'/games', state:{username:userName, team:teamName}}} >
                                    <button type='button'>JEUX</button>        
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
                </div>
            );

        }catch (e) {
            componentsToRender = (<Redirect to={'/intro'} />);
        };
        
        return componentsToRender;

    };
};

export default Games









