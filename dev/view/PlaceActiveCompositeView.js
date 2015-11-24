var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');
var Collection = require('./../collection/PlaceActiveCollection');


var ItemView = Backbone.Marionette.ItemView.extend({
  tagName: 'ul',
  className:'table__row winilla_cab_publish__row',
  template: require('./template/place_list_active--template.html'),
  ui: {
    link: '.photoPage'
  },
  events: {
    'click @ui.link': 'placePhotoPage'
  },
  placePhotoPage: function() {
    window.baseRoute.navigate('#placePhoto/' + this.model.get('id'), {trigger: true});
  }
});

module.exports = Backbone.Marionette.CompositeView.extend({
  onRender: function() {
    this.$('.winilla_cab_publish__header').css('display', 'none');
    this.$('.table').prepend('<ul row-full="" class="table__row winilla_cab_publish__row">' +
      '<li class="table__cell">Название места</li>' +
      '<li class="table__cell">Адрес места</li>' +
      '<li class="table__cell">Телефона места</li>' +
      '<li class="table__cell">Количество фоток</li>' +
      '<li class="table__cell">Дата</li>' +
      '<li class="table__cell">Отправить письмо</li>' +
      '<li class="table__cell no-margin">Убрать место</li>' +
    '</ul>');
    Backbone.Events.on('active:add',function(resp) {
      this.collection.add(resp);
    }, this);
  },
  collection: new Collection(),
  childView: ItemView,
  childViewContainer: '.table',
  template: require('./template/place_list_container--template.html')
});
