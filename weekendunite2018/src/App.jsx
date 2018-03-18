import React, { Component } from 'react'                    ;
import Routers              from './Components/Routers.jsx' ;
import {Link}               from 'react-router-dom'         ;
//import logo                 from './logo.svg'               ;
import './App.css';


 //<li><p className='department'> hello </p> </li>
//<img src={logo} className = 'App-logo' alt='logo' />

class App extends Component {

  render() {
    return (
      <div className = 'App'>
        <header className = 'App-header'>
          <ul>
            <li><Link to='/home' ><button type='button'>HOME  </button></Link></li>
            <li><Link to='/games'><button type='button'>GAMES </button></Link></li>
            <li><Link to='/info' ><button type='button'>INFO  </button></Link></li>
          </ul>
        </header>
        <Routers/>
      </div>

    );
  }
}

export default App;

 