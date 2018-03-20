import React, { Component } from 'react'
import hogwardsBackground from './hogwardsBackground.jpg' ;
import '../App.css';



class Home extends Component {
    constructor() {
        super();

        this.state = {tab:'Home'};

    };



    render() {
        return (
            <div className='Home'>
                <div className='Background'>
                    <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                </div>
                <p className = 'pageText'> Home sweet home bitches!</p>

            </div>
        );
    };
};

export default Home









