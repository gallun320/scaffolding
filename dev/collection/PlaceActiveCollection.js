var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');
var Collection = require('./PlaceCollection');


module.exports = Collection.extend({
  url: function() {
    return 'https://winilla.com/sapi/places-edit/list?status=1'
  }
});
