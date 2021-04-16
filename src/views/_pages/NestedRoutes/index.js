import React, { Component, Fragment } from 'react';
import {
	Route, 
	Switch, 
	Link,
	useRouteMatch,
	useParams
} from 'react-router-dom';

import NestedRoutesDetail from '@react.app/pages/NestedRoutes/NestedRoutesDetail.js';



//Might have mismatching versions of React and the renderer (such as React DOM)
function HookContent() {
	
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();

	
	return (
		<Fragment>
		
			<h3>Nested Routes Page</h3>

			<div><Link to={`${url}/topic-one`}>&gt; click here to display Topic One</Link></div>
			<div><Link to={`${url}/topic-two`}>&gt; click here to display Topic Two</Link></div>
			<div><Link to={`${url}/topic-three`}>&gt; click here to display Topic Three</Link></div>

			<hr />

			 <h5>Content:</h5>

			  <Switch>
				<Route exact path={path}>
				  <p>None.</p>
				</Route>
				<Route path={`${path}/:topicId`}>
				  <NestedRoutesDetail />
				</Route>
			  </Switch>
		</Fragment>
	)

}


class NestedRoutes extends Component {
	
  render() {
	  
    return (
	  <Fragment>

		{/*
		<!-- Content   
		====================================================== -->	
		*/}
		<div className="content">
		
			<HookContent />
		
		</div>


      </Fragment>
    );
	  
  }
    
}

export default NestedRoutes;



