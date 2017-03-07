var Backbone = require('backbone');


var ChatApp = Backbone.Model.extend({
  idAttribute: '_id',
  // initialize: function(){
  //   this.isNew() ? this.set('timestamp', Moment().format('LTS')) : this.set('timestamp', this.get('timestamp'))
});

var ChatCollection = Backbone.Collection.extend({
  model: ChatApp,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/messages'
});

module.exports = {
  ChatApp,
  ChatCollection
};
