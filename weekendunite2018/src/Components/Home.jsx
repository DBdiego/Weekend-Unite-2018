import React, { Component } from 'react'
import hogwardsBackground from './hogwardsBackground.jpg' ;
import '../App.css';



class Home extends Component {
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
            <div className='Home'>
                <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />

                <p className = 'pageText'> Home sweet home bitches!</p>

            </div>
        );
    };
};

export default Home









