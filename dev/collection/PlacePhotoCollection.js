var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');
var model = require('./../model/PlacePhotoModel');


module.exports = Backbone.Collection.extend({
  limit: 40,
  offset: 0,
  updated: true,
  oldLenght: null,
  us_id: null,
  initialize: function(options) {
    this.us_id = options.us_id;
    this.fetch({reset: true});
    this.on('add reset', function() {
      this.updated = false;
    }, this);
  },
  loadNext: function() {
    if(this.updated) {
      this.updated = false;
      return false;
    }
    if(this.oldLenght === this.length) return false;
    this.offset = this.length;
    $('#preloader').addClass('popup-show');
    this.fetch({ reset: false, remove: false, success: function() {
      $('#preloader').removeClass('popup-show');
      this.updated = true;
    } });
    this.oldLenght = this.length;
  },
  model: model,
  url: function() {
    return 'https://winilla.com/sapi/places-edit/photos/' + this.us_id + '?limit=' + this.limit + '&offset=' + this.offset;
  },
  parse: function(resp) {
    return resp.list;
  }
});
