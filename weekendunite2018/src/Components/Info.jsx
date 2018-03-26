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
        this.state = {screensize:[window.innerWidth, window.innerHeight]};

    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions.bind(this));
    };


    //Update screen dimensions
    updateDimensions() {
        console.log('updates screen')
        this.setState({screensize : [window.innerWidth, window.innerHeight]});
    };

    render() {
        let componentsToRender;
        try{

            const teamName = this.props.location.state.team;
            const userName = this.props.location.state.username;
            const listingSpace  = 8; //%
            const contactsSapce = 12;//%

            componentsToRender =  (
                <div className='Info'>
                    <header className = 'PersonalPageHeader'>
                        <img src={logo} className = 'App-logo' alt='logo' />
                        <ul>
                            <li>
                                <Link to={{pathname:'/home', state:{username:userName, team:teamName}}} >
                                    <button type='button'>EQUIPE</button>        
                                </Link>
                            </li>

                            <li>
                            <Link to={{pathname:'/info', state:{username:userName, team:teamName}}} >
                                    <button type='button'>INFOS PRATIQUE</button>        
                                </Link>
                            </li>
                        </ul>
                        <p className='teamName'> {userName}</p>
                    </header>
                    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet"/>
                    <div className='Background'>
                        <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                    </div>

                    <div className='BossWhatDoI'>
                        <svg width={ Math.round(0.47 * this.state.screensize[0])+'px'}
                             height={Math.round(0.08 * this.state.screensize[1])+'px'}>
                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            <text x='50%' y='45px'>Chef? Je mets quoi dans mon sac?</text>
                        </svg>
                    </div>

                    <div className='NotToForget'>
                        <svg width={ Math.round(0.47 * this.state.screensize[0])+'px'}  
                             height={Math.round(0.65 * this.state.screensize[1])+'px'}>

                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            <text className='TitleY' x='7%' y='35px'>A Prendre:</text>

                            <text className='ListingY'>
                                <tspan x='10%' y="75px">
                                1. Sac de couchage
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                2. Matelas
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                3. Trousse de toillette
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                4. Uniforme Impecable
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                5. Gamelle
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                6. Couverts
                                </tspan>
                                <tspan x='10%' dy={listingSpace + '%'}>
                                7. Ta bonne humeur
                                </tspan>

                                <tspan x='10%' dy={listingSpace + '%'}>
                                8. ...
                                </tspan>
                            </text>

                            <line className='Separator' x1='44%' y1='15%' x2='44%' y2='80%' />

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
                                - Tout autre appareil de type:
                                </tspan>
                                <tspan x='57%' dy={listingSpace-0.5 + '%'}>
                                "éléctronique"
                                </tspan>

                            </text>

                        </svg>
                    </div>


                    <div className='WhereDoIGo'>
                        <svg width={ Math.round(0.33 * this.state.screensize[0])+'px'} 
                             height={Math.round(0.08 * this.state.screensize[1])+'px'}>
                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            <text x='50%' y='45px'> Où est Poudlard?</text>
                        </svg>
                    </div>

                    <div className='Times'>
                        <svg width={ Math.round(0.33 * this.state.screensize[0])+'px'}  
                             height={Math.round(0.27 * this.state.screensize[1])+'px'}>

                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            <text className='Title' x='8%' y='22%'>Addresse de la rentrée</text>
                            
                            <text className='Address'>
                                <tspan x='15%' y='36%'>
                                Rue de Nérette 2, 
                                </tspan>
                                <tspan x='15%' dy='15%'>
                                6900 Marche-en-Famenne
                                </tspan>
                            </text>



                            <text className='ArrivalTitle' x='25%' y='75%'>Arrivée </text>
                            <text className='ArrivalTime'  x='25%' y='90%'>Vendredi 20/04 à 12:30 </text>

                            <line className='Separator' x1='50%' y1='80%' x2='50%' y2='95%' />

                            <text className='DepartureTitle' x='75%' y='75%'>Départ</text>
                            <text className='DepartureTime'  x='75%' y='90%'>Dimanche 22/04 à 12:30 </text>


                        </svg>
                    </div>



                    <div className='WhoDoIContact'>
                        <svg width={ Math.round(0.33 * this.state.screensize[0])+'px'} 
                             height={Math.round(0.08 * this.state.screensize[1])+'px'}>
                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  

                            <text x='50%' y='45px'>Un Empêchement?</text>
                        </svg>
                    </div>

                    <div className='Contact'>
                        <svg width={ Math.round(0.33 * this.state.screensize[0])+'px'}  
                             height={Math.round(0.25 * this.state.screensize[1])+'px'}>

                            <rect className='background' 
                                  width='100%' 
                                  height='100%' 
                                  x='0'
                                  y='0'
                            />  
                            
                            <text className='Title'>
                                <tspan x='10%' y="25px">
                                Envoie ton hibou pour prevenir de ton absence. Bien
                                </tspan>
                                <tspan x='10%' dy="15px">
                                évidement accompagné d'une raison magique. 
                                </tspan>
                            </text>
                            
                            <text className='ContactNames'>

                                <tspan x='15%' y='70px'>
                                Grand Chef Bala
                                </tspan>
                                <tspan x='15%' dy={contactsSapce + '%'}>
                                Akéla Louvettes
                                </tspan>
                                <tspan x='15%' dy={contactsSapce + '%'}>
                                Akéla Louveteaux
                                </tspan>
                                <tspan x='15%' dy={contactsSapce + '%'}>
                                CT Guide
                                </tspan>
                                <tspan x='15%' dy={contactsSapce + '%'}>
                                CT Scout
                                </tspan>
                            </text>


                            <text className='ContactNumbers'>

                                <tspan x='80%' y='70px'>
                                0 497/44.60.72
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
                                0 491 59 33 64
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









