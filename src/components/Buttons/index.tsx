/* 
 *************************************
 * <!-- Button -->
 *************************************
 */
 import React, { Component } from 'react';
 
 
 /*-- Apply this component styles --*/
 import '@react.app/components/Buttons/styles/index.scss';
 
 
 type ButtonProps = {
   bgColor?: string;
   btnName?: string;
   attributes?: any;
 };
 type ButtonState = {};
 
 
 
 const styles: JSON = {
  info: {
    backgroundColor: '#38c9ff',
    color: 'white'
  },
  success: {
    backgroundColor: '#16c900',
    color: 'white'
  },
  danger: {
    backgroundColor: '#ff2222',
    color: 'white'
  },
  warning: {
    backgroundColor: '#dfa22f',
    color: 'white'
  }
};



export default class Button extends Component<ButtonProps, ButtonState> {
  public static propTypes = {};
  constructor(props) {
    super(props);
  }
  render() {

    const {
      bgColor,
      btnName,
      ...attributes
    } = this.props;


    return (
      <>

        <button type='button' style={styles[bgColor] || styles['info']} {...attributes}>
          {btnName || 'Default'}
        </button>



      </>
    )
  }
}
 


//Configure your application to run in "development" mode.
if ( process.env.NODE_ENV === 'development' ) {
	//do something.
	
}