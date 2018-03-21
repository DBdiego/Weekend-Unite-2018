import React, { Component } from 'react'                    ;
import {Link}               from 'react-router-dom'         ;
import hogwardsBackground   from './hogwardsBackground.jpg' ;
import logo                 from '../logo.svg'              ;
import '../App.css';



class Games extends Component {
    constructor() {
        super();

        this.state = {tab:'Games'};

    };


    render() {
        return (
            <div className='Games'>
                <header className = 'PersonalPageHeader'>
                    <img src={logo} className = 'App-logo' alt='logo' />
                    <ul>
                        <li><Link to='/home' ><button type='button'>EQUIPE</button></Link></li>
                        <li><Link to='/games'><button type='button'>JEUX</button></Link></li>
                        <li><Link to='/info' ><button type='button'>INFO PRATIQUES</button></Link></li>
                    </ul>
                </header>
                <div className='Background'>
                    <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                </div>
                <p className = 'pageText'> Game the shit out of it!!</p>
            </div>
        );
    };
};

export default Games









