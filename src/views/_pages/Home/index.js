import React from 'react';
import Button from '@/components/Buttons';


let spreadOperator = {
  bgColor: 'info',
  btnName: 'Spread Operator',
};



export default ({ staticContext = {} }) => {
    staticContext.status = 200;
    
    return (
	  <>
		
            <div className="content">
            <p>This repository is a full-stack sample web application based on <strong>React+TypeScript+Babel+Webpack+Jest</strong> that creates a simple whole-website architecture, and provides the foundational services, components, and plumbing needed to get a basic web application up and running. </p>
		
		        <h3>Component Import:</h3>
            <Button bgColor='' btnName='' href="#"/>
            <Button bgColor='success' btnName='success'/>
            <Button bgColor='info' btnName='info'/>
            <Button {...spreadOperator}/>
		
		
            </div>
       
        
      </>
    );
};