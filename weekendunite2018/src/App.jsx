import React, { Component } from 'react'                    ;
import ReactMusicPlayer     from 'react-sound'       ;
import Routers              from './Components/Routers.jsx' ;
import {Link}               from 'react-router-dom'         ;
import logo                 from './logo.svg'               ;
import './App.css';


class App extends Component {


  render() {
    return (
      <div className = 'App'>
        <header className = 'AppHeader'>
        	<img src={logo} className = 'App-logo' alt='logo' />
  			<ul>
  				<li><Link to='/home' ><button type='button'>EQUIPE</button></Link></li>
  				<li><Link to='/games'><button type='button'>JEUX</button></Link></li>
  				<li><Link to='/info' ><button type='button'>INFO PRATIQUES</button></Link></li>
  			</ul>
        </header>
        <Routers/>
        <ReactMusicPlayer 
          url={'./HP-theme.mp3'} 
          autoLoad={true} 
          autoPlay={true} 
          loop={true}
          playStatus={ReactMusicPlayer.status.PLAYING}
          volume={0}
        />
      </div>

    );
  }
}

export default App;

 