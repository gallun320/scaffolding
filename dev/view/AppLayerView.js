var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');



module.exports = new (Backbone.Marionette.LayoutView.extend({
  regions: {
    appTable: '#content'
  },
  template: require('./template/scaffolding--template.html'),
  onRender: function() {
    var self = this;
    this.$el.find('.listPage').click(self.listPage);
    this.$el.find('.activePage').click(self.activePage);
    this.$el.find('.preparePage').click(self.preparePage);
    this.$el.find('.hidePage').click(self.hidePage);
  },
  listPage: function() {
    window.baseRoute.navigate('#', {trigger: true});
  },
  activePage: function() {
    window.baseRoute.navigate('#active', {trigger: true});
  },
  preparePage: function() {
    window.baseRoute.navigate('#prepare', {trigger: true});
  },
  hidePage: function() {
    window.baseRoute.navigate('#hide', {trigger: true});
  }
}))();
