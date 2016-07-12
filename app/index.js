var React      = require('react');
var ReactDOM   = require('react-dom');
var routes     = require('./config/routes');

//Attach Component to DOM
ReactDOM.render (
  routes,
  document.getElementById('app')
);
