var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');
var AppLayerView = require('./../view/AppLayerView');
var PlaceAllCompositeView = require('./../view/PlaceAllCompositeView');
var PlaceActiveCompositeView = require('./../view/PlaceActiveCompositeView');
var PlacePrepareCompositeView = require('./../view/PlacePrepareCompositeView');
var PlaceHideCompositeView = require('./../view/PlaceHideCompositeView');
var PlacePhotoCollectionView = require('./../view/PlacePhotoCollectionView');

module.exports = {
  appLayerView: AppLayerView,
  list: function() {
    this.setup();
    var placeAllCompositeView = new PlaceAllCompositeView();
    this.appLayerView.showChildView('appTable', placeAllCompositeView);
  },
  setup: function() {
    window.App.getRegion('scaffoldingRegion').show(this.appLayerView, { forceShow: true, preventDestroy: true });
    this.appLayerView.render();
  },
  active: function() {
    this.setup();
    var placeActiveCompositeView = new PlaceActiveCompositeView();
    this.appLayerView.showChildView('appTable', placeActiveCompositeView);
  },
  hide: function() {
    this.setup();
    var placeHideCompositeView = new PlaceHideCompositeView();
    this.appLayerView.showChildView('appTable', placeHideCompositeView);
  },
  prepare: function() {
    this.setup();
    var placePrepareCompositeView = new PlacePrepareCompositeView();
    this.appLayerView.showChildView('appTable', placePrepareCompositeView);
  },
  placePhotoList: function(id) {
    this.setup();
    var placePhotoCollectionView = new PlacePhotoCollectionView({us_id: id});
    this.appLayerView.showChildView('appTable', placePhotoCollectionView);
  }
}
