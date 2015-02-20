// Generated by CoffeeScript 1.8.0
(function() {
  var AnimatableRegion, Application, Marionette, bus, _,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Marionette = require('backbone.marionette');

  AnimatableRegion = require('./animatable_region');

  bus = require('./bus');

  _ = require('underscore');

  Application = (function(_super) {
    __extends(Application, _super);

    function Application(opts) {
      if (opts == null) {
        opts = {};
      }
      Application.__super__.constructor.apply(this, arguments);
      _.defaults(opts, {
        showTransitions: true
      });
      require('./marionette_renderer').setup();
      require('./cordova_support');
      this.bus = bus;
      this.addRegions({
        mainRegion: new AnimatableRegion({
          el: '#maji-app',
          showTransitions: opts.showTransitions
        })
      });
    }

    return Application;

  })(Marionette.Application);

  module.exports = Application;

}).call(this);