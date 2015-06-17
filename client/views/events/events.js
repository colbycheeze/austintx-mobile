Template.events.helpers({
  events: function() {
    return Events.find();
  }
});

Template.events.onCreated(function (){
  this.subscribe('events');
});
