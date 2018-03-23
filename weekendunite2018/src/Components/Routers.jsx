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
				<Route path='/intro'             component={Intro} /> 
				<Route path='/home/:team/:name'  component={Home}  /> 
				<Route path='/games/:team/:name' component={Games} />
				<Route path='/info/:team/:name'  component={Info}  />   
				<Redirect from='/' to='/intro' />
				<Route from='/home/:team/:name'  to='/home/:team/:name'  /> 
				<Route from='/games/:team/:name' to='/games/:team/:name' />
				<Route from='/info/:team/:name'  to='/info/:team/:name'  /> 
			</Switch>
		</div>
	  )
   }
}

export default Routers