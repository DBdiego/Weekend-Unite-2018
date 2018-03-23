import React, { Component } from 'react'
import {Redirect}             from 'react-router-dom'         ;
import hogwardsBackground from './hogwardsBackground.jpg' ;
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
        options.sort((a, b) => b.label - a.label);
        return options
    };


    handleChange(selectedOption)  {
        console.log(selectedOption)
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
                <div className='NameInput'>
                    <Select 
                        id='state-select'
                        name="form-field-name"
                        value={this.selectedOption}
                        onChange={this.handleChange}
                        options={this.state.options}
                        placeholder='Nom'
                        searchable={true}
                    />
                </div>

                <div className='Background'>
                    <img src={hogwardsBackground} className = 'BackgroundImage' alt='' />
                </div>

                {this.state.redirect}

            </div>
        );
    };
};

export default Intro









