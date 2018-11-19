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
                <Route path='/weekendunite/intro' component={Intro} />
                <Route path='/weekendunite/home'  component={Home}  />
                <Route path='/weekendunite/games' component={Games} />
                <Route path='/weekendunite/info'  component={Info}  />
                <Redirect from='/'    to='/weekendunite/intro' />
                <Route from='/weekendunite/home'  to='/weekendunite/home'  />
                <Route from='/weekendunite/games' to='/weekendunite/games' />
                <Route from='/weekendunite/info'  to='/weekendunite/info'  />
			</Switch>
		</div>
	  )
   }
}

export default Routers