import React, { Component, Fragment } from 'react';
import axios from 'axios';

class PostDetail extends Component {
	constructor(props) {

		//You are extending the React.Component class, and per the ES2015 spec, 
		//a child class constructor cannot make use of this until super() has 
		//been called; also, ES2015 class constructors have to call super() 
		//if they are subclasses.
		super(props);
		//console.log(this.props) //props will get logged.

        this.state = {
            postDetailData: null,
			isLoaded: false
        };
		
   
	}

    
	fetchPostDetail() {
		
		const self = this;
		//get vars
		const path = this.props.location.pathname;
		const currentID = path.split( '/' ).pop();
	
		// Request data
        var formData = new FormData();
        var defaultPostData = {
          action: 'get-posts-detail'
        };

        for (var k in defaultPostData) {
          formData.append(k, defaultPostData[k]);
        }

        axios({
          timeout: 15000,
          method: 'get',
          url: `https://restcountries.eu/rest/v2/name/${currentID}`, //../../assets/json/PostDetail.json
          data: formData,
          responseType: 'json'
        }).then(function (response) {

            const jsonData = response.data;
			
			self.setState({ 
				postDetailData: jsonData,
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
		console.log('[detail of post]this.props:' );
		console.log(this.props);
		
		
		this.fetchPostDetail();
	}
	
	
	
  render() {
	  
	const { isLoading, postDetailData, error } = this.state;
	
	return (
	  <Fragment>

			<div className="content">

			    { !isLoading ? (
		
					( postDetailData != null ) ? postDetailData.map((item, i) => 

						  <div key={"detail"+i} style={{padding: "15px", margin: "10px", display: "inline-block", border: "1px solid #ddd", width: "420px", textAlign: "left", position: "relative"}}>

								<img src={item.flag} alt="" style={{width: "400px", display: "inline-block" }} />
								<hr />
								<p><strong>Name: </strong>{item.name}</p>
								<p><strong>Capital: </strong>{item.Capital}</p>
								<p><strong>Population: </strong>{item.population}</p>
								<p><strong>Subregion: </strong>{item.subregion}</p>
								<p><strong>Languages: </strong></p>   
								<div>
									{item.languages.map((lanItem, k) => <span key={"lan"+k}>{lanItem.name}</span>)}
								</div>

						  </div>  
					) : ""
	  
				) : (
				  <div id="loading">Loading...</div>
				)}
		
			</div>


	  </Fragment>

	);
    

  }
	
	

}


export default PostDetail;


