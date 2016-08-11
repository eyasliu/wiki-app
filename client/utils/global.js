import _ from 'lodash'
import React from 'react';
import ReactDOM from "react-dom";
import hashHistory from 'react-router/lib/hashHistory';
import cx from 'classnames';
import combineReducers from 'redux/lib/combineReducers'
import compose from 'redux/lib/compose';

import Link from "react-router/lib/Link";
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';
import IndexRoute from 'react-router/lib/IndexRoute';


import fetch from './fetch';

/**
 * 设置全局变量
 * @param  {object} objs，foucs 需要设置为全局变量的对象集合，objs安全设置，foucs强制设置
 * @return {[type]}            [description]
 */
(function(objs, foucs){
  for(let key in objs){
    if(!window.hasOwnProperty(key)){
      window[key] = objs[key];
    }else{
      console.error("global variable ["+key+"] is already exits!")
    }
  }
  for(let key in foucs){
    window[key] = foucs[key]
  }
})({
  React,
  ReactDOM,
  Component: React.Component,
  RouterHistory: hashHistory,
  cx,
  combineReducers,
  compose,

  // Component
  Link,
  Router,
  Route,
  IndexRedirect,
  IndexRoute
}, {
  fetch,
  _
})
