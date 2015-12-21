UserStatus.events.on("connectionIdle", function(fields) {
  var games = Games.find().fetch();
  var user = Meteor.users.findOne({_id: fields.userId});

  for (var i = 0; i < games.length; i++) {
    if (games[i].players.indexOf(user.username) > -1) {
      Games.update(games[i]._id, {
        $pull: {
          players: user.username
        }
      })
    }
  }
})