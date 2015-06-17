Template.home.helpers({
  headlines: function() {
    return Headlines.find();
  }
});

Template.home.onCreated(function (){
  this.subscribe('headlines');
});

