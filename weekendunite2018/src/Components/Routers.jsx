import React, { Component }           from 'react'            ;
import { Switch, Route, Redirect }    from 'react-router-dom' ;

import Intro from './Intro.jsx' ;
import Home  from './Home.jsx'  ;
import Games from './Games.jsx' ;
import Info  from './Info.jsx'  ;

//				<Route path='/home/'  render={() => <Home  routerProps={{socket:'test'}} /> } /> 
//				<Route path='/home/'  component={Home}/>  
class Routers extends Component{
  render(){
    return(
		<div>
			<Switch>
				<Route path='/intro' render={() => <Intro        routerProps={{socket:'test'}} /> } /> 
				<Route path='/home/:team/:name'  component={Home}  /> 
				<Route path='/games/:team/:name' component={Games} />
				<Route path='/info/:team/:name'  component={Info}  />   
				<Redirect from='/' to='/intro' />
			</Switch>
		</div>
	  )
   }
}

export default Routers