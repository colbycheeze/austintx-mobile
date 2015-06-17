Template.services.helpers({
  services: function() {
    return Services.find();
  }
});

Template.services.onCreated(function (){
  this.subscribe('services');
});
