var $ = window.jQuery = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = Backbone.Marionette = require('backbone.marionette');
var moment = require('moment');

module.exports = Backbone.Model.extend({
  initialize: function () {
    console.log(this);
    if (this.get('result').formatted_phone_number === undefined) {
      this.attributes.result.formatted_phone_number = "Телефона нет";
      this.trigger('change');
    }
    var date = moment(new Date().getTime()).format('DD.MM');
    console.log(date);
    this.set('date', date);
  },
  defaults: {
    count: 1201,
    id: 2,
    result: {
      address_components: [],
      adr_address: "",
      formatted_address: "",
      formatted_phone_number: "",
      geometry: {},
      icon: "",
      id: "",
      international_phone_number: "",
      name: "",
      opening_hours: {},
      photos: [],
      place_id: "",
      rating: 0,
      reference: "",
      reviews: [],
      scope: "",
      types: [],
      url: "",
      user_ratings_total: 0,
      utc_offset: 0,
      vicinity: "",
      website: ""
    },
    status: 0,
    checked: false,
    date: 0
  }
});
