var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');

module.exports = Backbone.Model.extend({
  defaults: {
    id: 0,
    salt: ""
  }
});
