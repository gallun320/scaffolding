var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');
var Router = require('./router/Router');
var Controller = require('./controller/Controller');

window.App = new(Marionette.Application.extend({
  initialize: function () {
    console.log('App has init');
  }
}))();


window.App.addRegions(function () {
  return {
    scaffoldingRegion: "#wrap"
  }
});


window.App.addInitializer(function (options) {
  console.log('Has init');
  $(window).off('click').on('click', function() {
    Backbone.Events.trigger('close:click');
  });
  window.baseRoute = new Router({
    controller: Controller
  });
  Backbone.history.start();
});

window.App.start();
