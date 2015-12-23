Template.game.helpers({
  thisGame: function () {
    return Games.findOne({
      _id: Router.current().params.id
    });
  },
});

Template.game.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe("games", function(){
      Tracker.autorun(function(){
        var players = Games.findOne({_id: Router.current().params.id}).players;
        if (players.length > 2) alert('cool');
      });
    });
  });
});