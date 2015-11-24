var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');
var Collection = require('./../collection/PlaceCollection');


var ItemView = Backbone.Marionette.ItemView.extend({
  tagName: 'ul',
  className:'table__row winilla_cab_publish__row',
  template: require('./template/place_list_item--template.html'),
  ui: {
    link: '.photoPage',
    checkbox: '.checkbox'
  },
  events: {
    'click @ui.link': 'placePhotoPage',
    'click @ui.checkbox': 'check'
  },
  placePhotoPage: function() {
    window.baseRoute.navigate('#placePhoto/' + this.model.get('id'), {trigger: true});
  },
  check: function() {
    if(this.model.get('checked')) {
      this.model.set('checked', false);
    } else {
      this.model.set('checked', true);
    }
  }
});

module.exports = Backbone.Marionette.CompositeView.extend({
  onRender: function() {
    this.$('.table').prepend('<ul row-full="" class="table__row winilla_cab_publish__row">' +
      '<li class="table__cell">Выбрать место</li>' +
      '<li class="table__cell">Название места</li>' +
      '<li class="table__cell">Адрес места</li>' +
      '<li class="table__cell">Телефона места</li>' +
      '<li class="table__cell">Количество фоток</li>' +
    '</ul>');
  },
  ui: {
    addBtn: '.btn-add'
  },
  events: {
    'click @ui.addBtn' : 'addActive'
  },
  addActive: function() {
    var listId = this.collection.listId();
    var listComplete = this.collection.completed();
    if(listId === "") return false;
    $.post('https://winilla.com/sapi/places-edit/status', {id: listId, status: 1})
      .done(function() {
        Backbone.Events.trigger('active:add', listComplete);
      });
  },
  collection: new Collection(),
  childView: ItemView,
  childViewContainer: '.table',
  template: require('./template/place_list_container--template.html')
});
