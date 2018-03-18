import React, { Component } from 'react';
import hogwardsBackground from './hogwardsBackground.jpg' ;
import '../App.css';



class Games extends Component {
    constructor() {
        super();

        this.state = {tab:'Games'};

    };


    componentWillMount() {
    };


    componentDidMount() {
    };


    componentWillUnmount() {
    };



    render() {
        return (
            <div className='Games'>
                <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                <p className = 'pageText'> Game the shit out of it!!</p>
            </div>
        );
    };
};

export default Games









