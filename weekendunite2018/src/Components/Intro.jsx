import React, { Component } from 'react'
import hogwardsBackground from './hogwardsBackground.jpg' ;
import '../App.css';



class Intro extends Component {
    constructor() {
        super();

        this.state = {tab:'Intro'};

    };



    render() {
        return (
            <div className='Intro'>
                <div className='Background'>
                    <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                </div>
                <p className = 'pageText'> Intro to the world!</p>

            </div>
        );
    };
};

export default Intro









