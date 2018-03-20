import React, { Component } from 'react';
import hogwardsBackground from './hogwardsBackground.jpg' ;
import '../App.css';



class Info extends Component {
    constructor() {
        super();

        this.state = {tab:'Home'};

    };


    render() {
        return (
            <div className='Info'>
                <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet"/>
                <div className='Background'>
                    <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                </div>

                <div className='BossWhatDoI'>
                    <svg width='680px'  height='60px'>
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
                    <svg width='680px'  height='450px'>

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
                            <tspan x='10%' dy="33px">
                            2. Matelas
                            </tspan>
                            <tspan x='10%' dy="6%">
                            3. Trousse de toillette
                            </tspan>
                            <tspan x='10%' dy="33px">
                            4. Uniforme Impecable
                            </tspan>
                            <tspan x='10%' dy="33px">
                            5. Gamelle
                            </tspan>
                            <tspan x='10%' dy="33px">
                            6. Couverts
                            </tspan>
                            <tspan x='10%' dy="33px">
                            7. Ta bonne humeur
                            </tspan>

                            <tspan x='10%' dy="33px">
                            8. ...
                            </tspan>
                        </text>

                        <line className='Separator' x1='44%' y1='13%' x2='44%' y2='86%' />

                        <text className='TitleN' x='50%' y='35px'>A Oublier:</text>

                        <text className='ListingN'>

                            <tspan x='53%' y="75px">
                            - iPad
                            </tspan>
                            <tspan x='53%' dy="33px">
                            - iPhone
                            </tspan>
                            <tspan x='53%' dy="33px">
                            - iMac
                            </tspan>
                            <tspan x='53%' dy="33px">
                            - i...
                            </tspan>
                            <tspan x='53%' dy="33px">
                            - Tout autre appareil de type dis:
                            </tspan>
                            <tspan x='53%' dy="27px">
                            "éléctronique"
                            </tspan>

                        </text>

                    </svg>
                </div>


                <div className='WhereDoIGo'>
                    <svg width='450px'  height='60px'>
                        <rect className='background' 
                              width='100%' 
                              height='100%' 
                              x='0'
                              y='0'
                        />  

                        <text x='50%' y='45px'> Où est Poudlar?</text>
                    </svg>
                </div>

                <div className='Times'>
                    <svg width='450px'  height='150px'>

                        <rect className='background' 
                              width='100%' 
                              height='100%' 
                              x='0'
                              y='0'
                        />  

                        <text className='Title' x='10%' y='35px'>Addresse de la rentrée</text>
                        <text className='Address'>

                            <tspan x='23%' y="75px">
                            Street Nr. ,
                            </tspan>
                            <tspan x='23%' dy="25px">
                            Zipcode City
                            </tspan>

                        </text>

                    </svg>
                </div>



                <div className='WhoDoIContact'>
                    <svg width='450px'  height='60px'>
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
                    <svg width='450px'  height='150px'>

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

                            <tspan x='15%' y="60px">
                            Grand Chef Bala
                            </tspan>
                            <tspan x='15%' dy="17px">
                            Akela Louvettes
                            </tspan>
                            <tspan x='15%' dy="17px">
                            Akela Louveteaux
                            </tspan>
                            <tspan x='15%' dy="17px">
                            CT Guide
                            </tspan>
                            <tspan x='15%' dy="17px">
                            CT Scout
                            </tspan>
                        </text>


                        <text className='ContactNumbers'>

                            <tspan x='95%' y="60px">
                            0 497/44.60.72
                            </tspan>
                            <tspan x='95%' dy="17px">
                            0 497/44.60.72
                            </tspan>
                            <tspan x='95%' dy="17px">
                            0 497/44.60.72
                            </tspan>
                            <tspan x='95%' dy="17px">
                            0 497/44.60.72
                            </tspan>
                            <tspan x='95%' dy="17px">
                            0 497/44.60.72
                            </tspan>
                        </text>

                    </svg>
                </div>

            </div>
        );
    };
};

export default Info









