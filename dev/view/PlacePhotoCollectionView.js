var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');
var Collection = require('./../collection/PlacePhotoCollection');

var ItemView = Backbone.Marionette.ItemView.extend({
  tagName: 'div',
  className: 'large-4 medium-6 small-6 column indent--top',
  template: require('./template/place_photo--template.html'),
  modelEvents: {
    "change": "render"
  }
});

module.exports = Backbone.Marionette.CollectionView.extend({
  us_id: 0,
  collectionEvents: {
    'add reset remove': 'render'
  },
  className: 'row indent--left',
  initialize: function (options) {
    //_.bindAll(this, 'loadNext');
    //var self = this;
    this.collection = new Collection({
      us_id: options.us_id
    });
    /*this.collection.fetch({
      success: function() {
        self.render();
      }
    });*/
  },
  childView: ItemView,
  onRender: function () {
    var self = this;
    //console.log('render');
    var reg = /#placePhoto/gi;
    $(window).on('scroll', function () {
      var content = document.querySelector('body');
      if(!reg.test(location.hash)) return false;
      if ($(this).scrollTop() > content.clientHeight - 1000) {
        self.collection.loadNext();
        //self.render();
      }
    });
  },
  infinitScroll: function () {

  }
});
