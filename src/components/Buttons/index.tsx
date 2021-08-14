/* 
 *************************************
 * <!-- Button -->
 *************************************
 */
 import React, { Component } from 'react';
 
 
 /*-- Apply this component styles --*/
 import '@react.app/components/Buttons/styles/index.scss';
 
 
 interface ButtonStylesConfig {
  info?: {
    [key: string]: string | undefined;
  };
  success?: {
    [key: string]: string | undefined;
  };
  danger?: {
    [key: string]: string | undefined;
  };
  warning?: {
    [key: string]: string | undefined;
  };
}


 type ButtonProps = {
   bgColor?: string;
   btnName?: string;
   attributes?: any;
 };
 type ButtonState = false;
 
 
 
 const styles: ButtonStylesConfig = {
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

        <button type='button' style={styles[bgColor!] || styles['info']} {...attributes}>
          {btnName || 'Default'}
        </button>



      </>
    )
  }
}
 
