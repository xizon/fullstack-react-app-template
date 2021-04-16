# @react.app/components/Buttons

![MIT license](https://badgen.now.sh/badge/license/MIT)

[Source](https://github.com/xizon/react-app-starter/tree/master/src/components/Buttons)


## Examples

```js
import React, { Fragment } from 'react';
import Button from '@react.app/components/Buttons';

let spreadOperator = {
  bgColor: 'info',
  btnName: 'Spread Operator',
};


export default function ButtonsExamples() {
  return (
    <Fragment>
		<Button bgColor='' btnName=''/>
		<Button bgColor='success' btnName='success'/>
		<Button bgColor='info' btnName='info'/>
		<Button bgColor='danger' btnName='danger'/>
		<Button bgColor='warning' btnName='warning'/>
		<Button {...spreadOperator}/>
    </Fragment>
  );
}

```