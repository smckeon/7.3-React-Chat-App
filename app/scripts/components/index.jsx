var React = require('react');

var models = require('../models/models.js');

var ChatAppContainer = React.createClass({
  getInitialState: function() {
    var self = this;
    var chatCollection = new models.ChatCollection();
    chatCollection.fetch().done(function(){
      self.setState({ chatCollection: chatCollection });
    });
    return {
      chatCollection
    }
  },

  addMessage: function(message){
    var chatCollection = this.state.chatCollection;
    chatCollection.create(message);
    this.setState({chatCollection: chatCollection})
  },

  render: function(){
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
            <h1>React Chat App</h1>
              <ChatWindowForm chatCollection={this.state.chatCollection}/>
        </div>
      </div>
        <div className="col-md-5 message-control">
          <SendMessageForm addMessage={this.addMessage}/>
      </div>
    </div>
    );
  }
});

var SendMessageForm = React.createClass({
  getInitialState: function(){
    var state = {
      username: '',
      message: ''
    };
    return state;
  },

  updateUsername: function(event){
     this.setState({ username: event.target.value });
  },

  updateMessage: function(event){
    this.setState({ message: event.target.value });
  },

  addMessage: function(event){
    event.preventDefault();
    this.props.addMessage(this.state);
    this.setState({message: ''});
  },

  render: function(){
    return (
      <form onSubmit={this.addMessage}>
          <input onChange={this.updateUsername} value={this.state.username} type="text" className="form-control" placeholder="Username" />
          <input onChange={this.updateMessage} value={this.state.message} type="text" className="form-control" placeholder="Enter Message Here" />
          <input type="submit" className="btn btn-success sendmsg" value="Send Message" />
      </form>
    );
  }
});

var ChatWindowForm = React.createClass({
  render: function(){
    var messages = this.props.chatCollection.map(function(message){
      return (
        <li key={message.cid}>{message.get('message')}</li>
      )
    });
    return (
      <div className="chatwindow">
        <h5>Messages</h5>
          <ul>
            { messages }
          </ul>
      </div>
    );
  }
});

module.exports = {
  ChatAppContainer
};
