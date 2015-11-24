var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');
var model = require('./../model/PlaceModel');

module.exports = Backbone.Collection.extend({
  initialize: function() {
    this.fetch();
  },
  model: model,
  url: function() {
    return 'https://winilla.com/sapi/places-edit/list';
  },
  parse: function(resp) {
    return resp.list;
  },
  completed: function() {
    return this.filter(function(item) {
      return item.get('checked');
    });
  },
  listId: function() {
    return _.pluck(this.completed(), 'id').join(',');
  }
});
