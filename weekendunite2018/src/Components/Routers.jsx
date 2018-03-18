import { Switch, Route, Redirect }    from 'react-router-dom' ;
import React, { Component } from 'react'                      ;
import Intro from './Intro.jsx' ;
import Home  from './Home.jsx'  ;
import Games from './Games.jsx' ;
import Info  from './Info.jsx'  ;



class Routers extends Component{
  render(){
    return(
		<div>
			<Switch>
				
				<Route path='/intro' render={() => <Intro routerProps={{socket:'test'}} /> } />  
				<Route path='/home'  render={() => <Home  routerProps={{socket:'test'}} /> } />  
				<Route path='/games' render={() => <Games routerProps={{socket:'test'}} /> } />
				<Route path='/info'  render={() => <Info  routerProps={{socket:'test'}} /> } />  
				<Redirect from='/' to='/intro' />
			</Switch>
		</div>
	  )
   }
}

export default Routers