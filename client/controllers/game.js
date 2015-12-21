Template.game.helpers({
  thisGame: function () {
    return Games.findOne({
      _id: Router.current().params.id
    });
  },
});