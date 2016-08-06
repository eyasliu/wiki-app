import React from 'react'
import {render} from 'react-dom'

if(process.env.NODE_ENV === "development"){
	__webpack_public_path__ = "http://localhost:3000/static/"
}

render(<div>hello</div>, document.getElementById('root'))