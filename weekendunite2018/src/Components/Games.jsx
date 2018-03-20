import React, { Component } from 'react';
import hogwardsBackground from './hogwardsBackground.jpg' ;
import '../App.css';



class Games extends Component {
    constructor() {
        super();

        this.state = {tab:'Games'};

    };


    render() {
        return (
            <div className='Games'>
                <div className='Background'>
                    <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                </div>
                <p className = 'pageText'> Game the shit out of it!!</p>
            </div>
        );
    };
};

export default Games









