import React, { Component } from 'react'
import hogwardsBackground from './hogwardsBackground.jpg' ;
import '../App.css';



class Intro extends Component {
    constructor() {
        super();

        this.state = {tab:'Intro'};

    };


    componentWillMount() {
    };


    componentDidMount() {
    };


    componentWillUnmount() {
    };



    render() {
        return (
            <div className='Intro'>
                <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />

                <p className = 'pageText'> Intro to the world!</p>

            </div>
        );
    };
};

export default Intro









