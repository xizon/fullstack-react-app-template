import App from '@react.app/router/App.js';
//
import Home from '@react.app/pages/Home';
import Posts from '@react.app/pages/Posts';
import PostDetail from '@react.app/pages/Posts/PostDetail.js';
import Todos from '@react.app/pages/Todos';
import NestedRoutes from '@react.app/pages/NestedRoutes';
import NoMatch from '@react.app/pages/404';


const routesConfig = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
		
      {
        path: '/index',
        component: Home
      },
		
	/* 
	important!! 
		Fixed: Nested routes not working
		Add a new route of /posts/:post_id and add an `exact` property to the current route: 
	*/
		
      {
        path: '/posts',
        component: Posts,
		exact: true
      },
      {
        path: '/todos',
        component: Todos
      },
      {
        path: '/posts/:post_id',
        component: PostDetail
      },
		
	  /* In order to make nested routes valid, do not add the exact attribute here */
	  {
        path: '/nested-routes',
        component: NestedRoutes
      },
      {
        path: '*',
        component: NoMatch
      } 	
		
    ]
  }
];


export default routesConfig;

