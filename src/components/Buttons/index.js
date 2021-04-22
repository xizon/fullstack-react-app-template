import React from 'react';

import '@react.app/components/Buttons/styles/index.scss';


const styles = {
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



export default class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		  <>
			  <button type='button' style={styles[this.props.bgColor] || styles['info']}>
				{this.props.btnName || 'Default'}
			  </button>
		  </>
		)
	}
}



