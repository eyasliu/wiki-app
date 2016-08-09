import "common/style";
import "utils/global";
import React from 'react'
import {render} from 'react-dom'
import APP from 'framework/routes';

if(process.env.NODE_ENV === "development"){
	__webpack_public_path__ = "http://localhost:3000/static/"
}

render(APP, document.getElementById('root'))