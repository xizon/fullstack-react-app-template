import App from '@/router/App.js';
//
import Home from '@/pages/Home';
import Posts from '@/pages/Posts';
import PostDetail from '@/pages/Posts/PostDetail.js';
import Todos from '@/pages/Todos';
import NestedRoutes from '@/pages/NestedRoutes';
import NoMatch from '@/pages/404';


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

