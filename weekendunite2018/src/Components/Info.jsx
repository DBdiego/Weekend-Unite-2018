import React, { Component } from 'react'                    ;
import {Link, Redirect}     from 'react-router-dom'         ;
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

class Info extends Component {
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

//<text className='Title' x='8%' y='22%'>Addresse de la rentrée</text>

    render() {
        let componentsToRender;
        try{

            const teamName = this.props.location.state.team;
            const userName = this.props.location.state.username;
            const listingSpace  = 8 ; //[%]
            const contactsSapce = 12; //[%]

            componentsToRender =  (
                <div className={'Info'+this.state.deviceType}>
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
                    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet"/>
                    <div className={'Background'+this.state.deviceType}>
                        <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className='BossWhatDoI'>
                        <svg width={ Math.round(this.state.svgsizes.notToForget[0] * this.state.screensize[0])+'px'}
                             height={Math.round(0.08 * this.state.screensize[1])+'px'}>
                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            <text x='50%' y='70%'>Chef? Je mets quoi dans mon sac?</text>
                        </svg>
                    </div>

                    <div className='NotToForget'>
                        <svg width={ Math.round(this.state.svgsizes.notToForget[0] * this.state.screensize[0])+'px'}  
                             height={Math.round(0.73 * this.state.screensize[1])+'px'}>

                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            <text className='TitleY' x='7%' y='35px'>A Prendre:</text>

                            <text className='ListingY'>
                                <tspan x='10%' y="75px">
                                - Sac de couchage
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                - Matelas
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                - Trousse de toilette
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                - Uniforme Impeccable
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                - Gamelle & Couverts
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                - Gourde
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                - Ta bonne humeur
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                - Gros pull
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                - Veste imperméable
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                - Ton plus beau
                                </tspan>
                                <tspan x='12%' dy={(listingSpace - 2) + '%'}>
                                déguisement
                                </tspan>
                            </text>

                            <line className='Separator' x1='46%' y1='15%' x2='46%' y2='90%' />

                            <text className='TitleN' x='50%' y='35px'>A Oublier:</text>

                            <text className='ListingN'>

                                <tspan x='53%' y="75px">
                                - iPad
                                </tspan>
                                <tspan x='53%' dy={listingSpace + '%'}>
                                - iPhone
                                </tspan>
                                <tspan x='53%' dy={listingSpace + '%'}>
                                - iMac
                                </tspan>
                                <tspan x='53%' dy={listingSpace + '%'}>
                                - i...
                                </tspan>
                                <tspan x='53%' dy={listingSpace + '%'}>
                                - Et tout autre appareil de type:
                                </tspan>
                                <tspan x='57%' dy={listingSpace-0.5 + '%'}>
                                "électronique"
                                </tspan>

                            </text>

                        </svg>
                    </div>


                    <div className='WhereDoIGo'>
                        <svg width={ Math.round(this.state.svgsizes.whereAbouts[0] * this.state.screensize[0])+'px'} 
                             height={Math.round(0.08 * this.state.screensize[1])+'px'}>
                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            <text x='50%' y='70%'> Où est Poudlard?</text>
                        </svg>
                    </div>

                    <div className='Times'>
                        <svg width={ Math.round(this.state.svgsizes.whereAbouts[0] * this.state.screensize[0])+'px'}  
                             height={Math.round(0.27 * this.state.screensize[1])+'px'}>

                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            
                            
                            <text className='Address'>
                                <tspan x='30%' y='23%'>
                                Rue de Nérette 2, 
                                </tspan>
                                <tspan x='30%' dy='15%'>
                                6900 Marche-en-Famenne
                                </tspan>
                            </text>

                            <line className='Separator' x1='25%' y1='50%' x2='75%' y2='50%' />

                            <text className='ArrivalTitle' x='25%' y='72%'>Arrivée </text>
                            <text className='ArrivalTime'  x='25%' y='90%'>Samedi 21/04 à 10:00 </text>

                            <line className='Separator' x1='50%' y1='73%' x2='50%' y2='95%' />

                            <text className='DepartureTitle' x='75%' y='72%'>Départ</text>
                            <text className='DepartureTime'>

                                <tspan x='75%' y='86%'>
                                Dimanche 22/04 à 11:00 
                                </tspan>
                                <tspan x='75%' dy='10%'>
                                pour une messe
                                </tspan>
                            </text>


                        </svg>
                    </div>



                    <div className='WhoDoIContact'>
                        <svg width={ Math.round(this.state.svgsizes.contacts[0] * this.state.screensize[0])+'px'} 
                             height={Math.round(0.08 * this.state.screensize[1])+'px'}>
                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            <text x='50%' y='70%'>Un Empêchement?</text>
                        </svg>
                    </div>

                    <div className='Contact'>
                        <svg width={ Math.round(this.state.svgsizes.contacts[0] * this.state.screensize[0])+'px'}  
                             height={Math.round(0.33 * this.state.screensize[1])+'px'}>

                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  
                            
                            <text className='Title'>
                                <tspan x='10%' y='25px'>
                                Envoie ton hibou pour prévenir de ton absence. Bien
                                </tspan>
                                <tspan x='10%' dy='10%'>
                                évidemment accompagné d'une raison magique. 
                                </tspan>
                            </text>
                            
                            <text className='ContactNames'>

                                <tspan x='15%' y='78px'>
                                Baladins
                                </tspan>
                                <tspan x='15%' dy={contactsSapce + '%'}>
                                Louvettes (Akéla)
                                </tspan>
                                <tspan x='15%' dy={contactsSapce + '%'}>
                                Louveteaux (Akéla)
                                </tspan>
                                <tspan x='15%' dy={contactsSapce + '%'}>
                                Guides (CT)
                                </tspan>
                                <tspan x='15%' dy={contactsSapce + '%'}>
                                Scout (Gibbon)
                                </tspan>
                            </text>


                            <text className='ContactNumbers'>

                                <tspan x='80%' y='78px'>
                                0 491 51 29 95
                                </tspan>
                                <tspan x='80%' dy={contactsSapce + '%'}>
                                0 486 73 81 22
                                </tspan>
                                <tspan x='80%' dy={contactsSapce + '%'}>
                                0 479 22 37 72
                                </tspan>
                                <tspan x='80%' dy={contactsSapce + '%'}>
                                0 478 05 88 37
                                </tspan>
                                <tspan x='80%' dy={contactsSapce + '%'}>
                                0 489 00 30 56
                                </tspan>
                            </text>

                        </svg>
                    </div>

                </div>
            );
        }catch (e) {
            componentsToRender =  (<Redirect to={'/intro'} />);
        };
        return componentsToRender;
    };
};

export default Info









