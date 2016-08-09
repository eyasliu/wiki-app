import _ from 'lodash'
import React from 'react';
import ReactDOM from "react-dom";
import hashHistory from 'react-router/lib/hashHistory';
import cx from 'classnames';

import Link from "react-router/lib/Link";
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

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
  Component: React.Component,
  RouterHistory: hashHistory,
  cx,

  // Component
  Link,
  Router,
  Route,
  IndexRedirect
})