import React, { Component }           from 'react'            ;
import { Switch, Route, Redirect }    from 'react-router-dom' ;

import Intro from './Intro.jsx' ;
import Home  from './Home.jsx'  ;
import Games from './Games.jsx' ;
import Info  from './Info.jsx'  ;


class Routers extends Component{
  render(){
    return(
		<div>
			<Switch>
				<Route path='/intro' component={Intro} /> 
				<Route path='/home'  component={Home}  /> 
				<Route path='/games' component={Games} />
				<Route path='/info'  component={Info}  />   
				<Redirect from='/' to='/intro' />
				<Route from='/home'  to='/home'  /> 
				<Route from='/games' to='/games' />
				<Route from='/info'  to='/info'  /> 
			</Switch>
		</div>
	  )
   }
}

export default Routers