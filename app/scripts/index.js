var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

require('./router.js');

// var ChatAppContainer = require('./components/index.jsx');

$(function(){
Backbone.history.start();
});
