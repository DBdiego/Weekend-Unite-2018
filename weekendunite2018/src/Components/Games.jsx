import React, { Component } from 'react'                    ;
import {Link}               from 'react-router-dom'         ;
import hogwardsBackground   from './hogwardsBackground.jpg' ;
import logo                 from '../logo.svg'              ;
import '../App.css';



class Games extends Component {

    render() {
        const teamName = this.props.match.params.team;
        const userName = this.props.match.params.name;
        
        return (
            <div className='Games'>
                <header className = 'PersonalPageHeader'>
                    <img src={logo} className = 'App-logo' alt='logo' />
                    <ul>
                        <li><Link to={'/home/'  + teamName + '/' + userName} ><button type='button'>EQUIPE</button>        </Link></li>
                        <li><Link to={'/games/' + teamName + '/' + userName} ><button type='button'>JEUX</button>          </Link></li>
                        <li><Link to={'/info/'  + teamName + '/' + userName} ><button type='button'>INFO PRATIQUES</button></Link></li>
                    </ul>
                    <p className='teamName'> {userName}</p>
                </header>
                <div className='Background'>
                    <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                </div>
            </div>
        );
    };
};

export default Games









