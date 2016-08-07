import React from 'react'
import {render} from 'react-dom'
import "utils/global";
import APP from 'framework';

if(process.env.NODE_ENV === "development"){
	__webpack_public_path__ = "http://localhost:3000/static/"
}

render(<APP></APP>, document.getElementById('root'))