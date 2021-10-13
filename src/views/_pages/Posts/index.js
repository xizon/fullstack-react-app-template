import React, { Component } from 'react';
import axios from 'axios';
import PostItem from '@react.app/pages/Posts/PostItem.js';


class Posts extends Component {

	constructor(props) {

		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		//console.log(this.props) //props will get logged.


        this.state = {
            postsData: null,
			isLoaded: false
        };
		
	
	}
    
	fetchPosts() {
		
		const self = this;

		// Request data
        var formData = new FormData();
        var defaultPostData = {
          action: 'get-posts'
        };

        for (var k in defaultPostData) {
          formData.append(k, defaultPostData[k]);
        }
 
        axios({
          timeout: 15000,
          method: 'get',
          url: 'https://restcountries.com/v2/all', //../../assets/json/Posts.json
          data: formData,
          responseType: 'json'
        }).then(function (response) {

            const jsonData = response.data;
			
			self.setState({ 
				postsData: jsonData,
				isLoaded: true
			});

            console.log( jsonData );
   

        })
        .catch(function (error) {

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                const status = error.response.status;
                console.log(status);

				self.setState({
					isLoaded: false,
					error: error
				});
					


            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);

                //
            } else {
                // If there was a problem, we need to
                // dispatch the error condition
                console.log(error.message);
            }
        });
	}

	componentDidMount() {
		console.log('[posts list]this.props:' );
		console.log(this.props);
		
		
		this.fetchPosts();
	}
	

  render() {
	  
	const { isLoaded, postsData, error } = this.state;
	
	return (
	  <>

			<div className="content">
			    { isLoaded ? (
			
					( postsData != null ) ? postsData.map((item, i) => 
					    <PostItem key={i} {...item} />
					) : ""
		
				) : (
				  <div id="loading">Loading...</div>
				)}
		
			</div>


	  </>

	);
    

  }

}

export default Posts;


