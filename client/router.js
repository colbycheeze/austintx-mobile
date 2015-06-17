Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  var location = Iron.Location.get();
  if (location.queryObject.platformOverride) {
    Session.set('platformOverride', location.queryObject.platformOverride);
  }
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('events', {path: '/events'});
  this.route('services', {path: '/services'});
  this.route('information', {path: '/information'});
});
