var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var ChatAppContainer = require('./components/index.jsx').ChatAppContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    // 'home': 'home'
  },

  index: function(){
    ReactDOM.render(
      React.createElement(ChatAppContainer),
      document.getElementById('app')
    )
    console.log('Whatttttsup Index');
  },
  //
  // home: function(){
  //   alert('oh hey there!')
  // },

});

var appRouter = new AppRouter();


module.exports = {
  appRouter
};
