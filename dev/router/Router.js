var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');



module.exports = Backbone.Marionette.AppRouter.extend({
  appRoutes: {
    "": "list",
    "active": "active",
    "prepare": "prepare",
    "hide": "hide",
    "placePhoto/:id": "placePhotoList"
  }
});
