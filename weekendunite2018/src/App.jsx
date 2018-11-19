import React, { Component } from 'react'                    ;
import ReactMusicPlayer     from 'react-sound'       ;
import Routers              from './Components/Routers.jsx' ;
import './App.css';


class App extends Component {


  render() {
    return (
      <div className = 'App'>
        <Routers/>
        <ReactMusicPlayer 
          url={'/weekendunite/intro/HP-theme.mp3'} 
          autoLoad={true} 
          autoPlay={true} 
          loop={true}
          playStatus={ReactMusicPlayer.status.PLAYING}
          volume={30}
        />
      </div>

    );
  }
}

export default App;

 