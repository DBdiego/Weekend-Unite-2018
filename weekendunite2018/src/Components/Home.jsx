import React, { Component } from 'react'                    ;
import {Link, Redirect}     from 'react-router-dom'         ;
import teamTexts            from '../teamText.json'         ;
import hogwardsBackground   from './hogwardsBackground.jpg' ;
import logo                 from '../logo.svg'              ;
import '../App.css';


/*

                            <li>
                                <Link to={{pathname:'/games', state:{username:userName, team:teamName}}} >
                                    <button type='button'>JEUX</button>        
                                </Link>
                            </li>

*/
class Home extends Component {
    constructor() {
        super();
        let [deviceType, svgsizes] = this.componentSizes([window.innerWidth, window.innerHeight])

        this.state = {screensize:[window.innerWidth, window.innerHeight],
                      deviceType:deviceType,
                      svgsizes:svgsizes
                      };

        this.componentSizes = this.componentSizes.bind(this)
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions.bind(this));
    };


    //Update screen dimensions
    updateDimensions() {
        const newWidth  = window.innerWidth  ;
        const newHeight = window.innerHeight ;

        let [deviceType, svgsizes] = this.componentSizes([newWidth, newHeight])

        this.setState({screensize : [newWidth, newHeight],
                       deviceType : deviceType,
                       svgsizes   : svgsizes
                    });
    };

    componentSizes(screenSize){

        let deviceType = '';
        let componentPercentages = {
                                notToForget:[0.47, ],
                                whereAbouts:[0.33, ],
                                contacts   :[0.33, ]};

        if (screenSize[0]< 700){
            deviceType = 'Mobile';
            componentPercentages = {
                                notToForget:[0.90, ],
                                whereAbouts:[0.90, ],
                                contacts   :[0.90, ]};
        }

        return [deviceType, componentPercentages];

    };

    render() {
        let componentsToRender;
        try {
            const teamName = this.props.location.state.team;
            const userName = this.props.location.state.username;
            const path2pic = '/home/'+(teamName.toLowerCase()).replace(' ','_')+'.jpg';
            //const path2pic = './'+(teamName.toLowerCase()).replace(' ','_')+'.jpg';
            const teamText = teamTexts['summaries'][teamName];
            const teamHouse = teamTexts['houses'][teamName];

            componentsToRender = (
                <div className={'Home'+this.state.deviceType}>
                    <header className={'PersonalPageHeader'+this.state.deviceType}>
                        <ul>
                            <li>
                                <img src={logo} className = {'App-logo'+this.state.deviceType} alt='logo' />
                            </li>
                            <li>
                                <Link to={{pathname:'/home', state:{username:userName, team:teamName}}} >
                                    <button type='button'>EQUIPE</button>        
                                </Link>
                            </li>

                            <li>
                            <Link to={{pathname:'/info', state:{username:userName, team:teamName}}} >
                                    <button type='button'>INFOS PRATIQUES</button>        
                                </Link>
                            </li>
                            <li>
                                <p className={'teamName'+this.state.deviceType}> {userName}</p>
                            </li>
                        </ul>
                        
                    </header>
                    <div className={'Background'+this.state.deviceType}>
                        <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className='textAndPicture'>
                        <img src={path2pic} className = {'ProfilePicture'+this.state.deviceType} alt='' />

                        <p className='textTitle'> {teamName}</p>
                        <p className='teamHouse'> {teamHouse}</p>
                        <p className='textExplication'> {teamText}</p>
                    </div>
                </div>
            );
        }
        catch (e) {
            componentsToRender =  (<Redirect to={'/intro'} />);
        };
        return componentsToRender

    };
};

export default Home









