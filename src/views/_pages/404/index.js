import React from 'react';

export default ({ staticContext = {} }) => {
    staticContext.status = 404;
    
    return (
	  <>
		
            <div className="content">
                <h3>404 - Not found</h3>
            </div>
       
        
      </>
    );
};