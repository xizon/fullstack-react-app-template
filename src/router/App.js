import React, { Fragment } from 'react';
import {
	HashRouter,
	Route, 
	Switch, 
	Link,
	Redirect,
	useLocation
} from 'react-router-dom';
import customRoutesConfig from '@react.app/router/RoutesConfig.js';


export default (props) => {
    
	//Click the route to trigger the event
    const theLocation = useLocation();
    React.useEffect(() => {
		console.log( 'theLocation(): ', theLocation );
		
		//create a style element and append to head
		const $style = document.createElement("style");
		document.head.appendChild($style);
		$style.innerHTML = `
            #webtitle {
				margin: 10px 90px;
			}
            #loading {
				margin: 10px 90px;
			}

			nav {
				display: block;
				margin-bottom: 50px;
			}

			nav ul {
				list-style: none;
			}

			nav li {
				float: left;
				padding: 1rem 2rem;
			}

			nav li a {
				color: #2075EF;
				text-decoration: none;
				font-size: 16px;
				text-transform: uppercase;
				border: 1px solid rgba(0, 0, 0, 0);
				padding: 0.5rem 1rem;
			}

			nav li.active a {
				background: #F7F6F0;
				border: 1px solid #EFE4E5;
				padding: 0.5rem 1rem;
			}

			nav::after {
				content: "";
				display: block;
				clear: both;
			}

			.content {
				display: block;
				padding: 15px;
				background: #F7F6F0;
				border: 1px solid #EFE4E5;
				box-shadow: 0px 10px 5px -12px rgb(0 0 0 / 21%);
				margin: 10px 70px;
				border-radius: 15px;
			}`;

	
    });
	
	
    return (
	  <Fragment>
		
		<HashRouter>
		
		  <h1 id="webtitle">Uix Create React App</h1>
		
		  <nav>
			  <ul>
				<li className={props.location.hash === '#/index' || props.location.hash === '#/' ? 'active' : ''}>
				  <Link to="/index">Home</Link>
				</li>
				<li className={props.location.hash === '#/todos' ? 'active' : ''}>
				  <Link to="/todos">Todos</Link>
				</li>
				<li className={props.location.hash.indexOf( '#/posts' ) >= 0 ? 'active' : ''}>
				  <Link to="/posts">Posts</Link>
				</li>
				<li className={props.location.hash === '#/errorpage' ? 'active' : ''}>
				  <Link to="/errorpage">404</Link>
				</li>
				<li className={props.location.hash.indexOf( '#/nested-routes' ) >= 0 ? 'active' : ''}>
				  <Link to="/nested-routes">Nested Routes</Link>
				</li>
			  </ul>

		  </nav>



			{/* A <Switch> looks through its children <Route>s and
				renders the first one that matches the current URL. 
				The express configuration associated with the file webpack.config.js
			*/
			/*

			Directly display the content of the homepage component when there is no redirect.

			<Route
			  exact
			  path="/"
			  render={props => <Home {...props} />}
			/>
			*/
			 }
		  <Switch>

			  {/* Set React Router Default Route Redirect to `/index` */}
			  <Route
				exact
				path="/"
				render={(props) => {
					return (
					  <Redirect to="/index" />
					)
				}}
			  />


			  {/* Loop through an array to create routes in react router` */}
			  {
				customRoutesConfig[0].routes.map((item,index) => {

					return (
					  <Route
						key={index}
						path={item.path}
						exact={item.exact}
						component={item.component}
					  />
					);	

				})
			  }

		  </Switch>

       </HashRouter>

      </Fragment>
    );

};