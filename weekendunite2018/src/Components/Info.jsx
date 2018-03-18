import React, { Component } from 'react';
import hogwardsBackground from './hogwardsBackground.jpg' ;
import '../App.css';



class Info extends Component {
    constructor() {
        super();

        this.state = {tab:'Home'};

    };


    componentWillMount() {
    };


    componentDidMount() {
    };


    componentWillUnmount() {
    };


    render() {
        return (
            <div className='Info'>
                <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                <p className = 'pageText'> Info text to se if info appear</p>
            </div>
        );
    };
};

export default Info









