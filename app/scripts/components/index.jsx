var React = require('react');

var models = require('../models/models.js');


  var ChatAppContainer = React.createClass({
    render: function(){
      return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <h1>React Chat App</h1>
                <ChatWindowForm />
          </div>
          <div className="col-md-2 username">
            <UsernameForm />
          </div>
        </div>

          <div className="col-md-5 message-control">
            <SendMessageForm />
        </div>
      </div>
      );
    }
  });


var UsernameForm = React.createClass({
  render: function(){
    return (
      <input type="text" className="form-control" placeholder="Username" />
    );
  }
});


var SendMessageForm = React.createClass({
  render: function(){
    return (
  <div>
      <input type="text" className="form-control" placeholder="Enter Message Here" />
      <button type="button" className="btn btn-success sendmsg">Send Message</button>
  </div>
    );
  }
});


var ChatWindowForm = React.createClass({
  render: function(){
    return (
    <div className="chatwindow">
      <h5>Messages</h5>
        <ul>
          <li>placeholder text</li>
          <li>placeholder text</li>
          <li>placeholder text</li>
        </ul>
    </div>
      );
    }
});

module.exports = {
  ChatAppContainer
};
