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
        this.state = {tab  :'Intro',
                      options:options,
                      selectedOption:'',
                      redirect:''};

        this.handleChange = this.handleChange.bind(this)
        this.optionCreator = this.optionCreator.bind(this);


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
                            redirect: <Redirect to={{pathname: '/home', 
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
            <div className='Intro'>

                <div className='Background'>
                    <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                </div>

                <p className='ConvocTitle'>Convocation Weekend Unité 2018</p>

                <div className='NameInput'>
                    <Select 
                        id='state-select'
                        name="form-field-name"
                        value={this.selectedOption}
                        onChange={this.handleChange}
                        options={this.state.options}
                        placeholder='Quel est votre nom?'
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









