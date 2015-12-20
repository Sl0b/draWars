Template.game.helpers({
  thisGame: function() {
    return Games.findOne({_id: Router.current().params.id});
  },
});

Template.game.onRendered(function () {
  Template.instance().routeId = Router.current().params.id;
});

Template.game.onDestroyed(function () {
  Meteor.call('removePlayer', Template.instance().routeId, Meteor.user().username);
});