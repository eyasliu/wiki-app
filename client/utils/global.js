import _ from 'lodash'
import React from 'react';
import ReactDOM from "react-dom";
import async from "async";

(function(objs){
	for(let key in objs){
		if(!window.hasOwnProperty(key)){
			window[key] = objs[key];
		}else{
			console.error("global variable ["+key+"] is already exits!")
		}
	}
})({
	React, 
	ReactDOM, 
	async
})