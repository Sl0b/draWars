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

Meteor.setInterval(function() {
  var games = Games.find({private: true}).fetch();

  for (var i = 0; i < games.length; i++) {
    if (games[i].players.length === 0) {
      Games.remove({_id: games[i]._id});
    }
  }
}, 60000);