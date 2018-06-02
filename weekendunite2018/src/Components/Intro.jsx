import React, { Component } from 'react'
import {Redirect}           from 'react-router-dom'         ;
import hogwardsBackground   from './hogwardsBackground.jpg' ;
import HPLogo   from './HPLogo.png' ;
import database from '../database.json';
import '../App.css';

import Select from 'react-select';




class Intro extends Component {
    constructor() {
        super();

        const options = this.optionCreator(database.names)
        const deviceType = this.componentSizes([window.innerWidth, window.innerHeight]);
        console.log(deviceType)
        this.state = {tab            :'Intro'   ,
                      options        :options   ,
                      selectedOption :''        ,
                      deviceType     :deviceType,
                      redirect:''};

        this.handleChange   = this.handleChange.bind(this)
        this.optionCreator  = this.optionCreator.bind(this);
        this.componentSizes = this.componentSizes.bind(this)
    };


    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions.bind(this));
    };


    //Update screen dimensions
    updateDimensions() {
        console.log('screen update')
        const newWidth  = window.innerWidth  ;
        const newHeight = window.innerHeight ;

        const deviceType = this.componentSizes([newWidth, newHeight])

        this.setState({screensize : [newWidth, newHeight],
                       deviceType : deviceType
                    });
    };

    componentSizes(screenSize){

        let deviceType = '';
        if (screenSize[0]< 700){
            deviceType = 'Mobile';
        }

        return deviceType;
    };


    optionCreator(names){

        let options = [];
        names.forEach((name) => {
            options.push({value:name, label:name})
        });

        function SplitName(complete, component = 'last'){
            let toReturn = ''
            if (component === 'first'){
                toReturn = complete.split(' ')[0];
            }else{
                toReturn = (complete.split(' ').slice(1)).join(' ');
            }
            return toReturn
        }
        const sortedOptions = options.sort((a, b) => {return (SplitName(a.label)).localeCompare( (SplitName(b.label)))} );

        return sortedOptions
    };


    handleChange(selectedOption)  {
        if (selectedOption.constructor !== Array){
            const team = database.n2t[selectedOption.label];
            this.setState({ selectedOption: selectedOption.label,
                            redirect: <Redirect to={{pathname: '/weekendunite/home', 
                                                     state   : {username: selectedOption.label, team:team}
                                                     }}/>
                        });



        }else{
            this.setState({ selectedOption: selectedOption.label,
                            redirect:''});
        }

    };


    render() {
        return (
            <div className={'Intro'+this.state.deviceType}>

                <div className={'Background'+this.state.deviceType}>
                    <img src={hogwardsBackground} className='BackgroundImage' alt='' />
                </div>

                <p className={'ConvocTitle'+this.state.deviceType}>Convocation Week-end Unité 2018</p>

                <div className='NameInput'>
                    <Select 
                        id='state-select'
                        name="form-field-name"
                        value={this.selectedOption}
                        onChange={this.handleChange}
                        options={this.state.options}
                        placeholder='Quel est ton nom?'
                        searchable={true}
                    />
                </div>


                <div className='HPLogo'>
                    <img src={HPLogo} alt='' />
                </div>


                {this.state.redirect}

            </div>
        );
    };
};

export default Intro









