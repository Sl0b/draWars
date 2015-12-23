Games = new Mongo.Collection("games");

Meteor.methods({
  newGame: function (data) {
    // Make sure the user is logged in before inserting a task
    if (!Meteor.user()) {
      throw new Meteor.Error("not-authorized");
    }

    Games.insert({
      name: data.name,
      password: data.password,
      ongoing: false,
      players: [Meteor.user().username],
      private: true,
    });
  },

  addPlayer: function (gameId, username) {
    var game = Games.findOne(gameId);

    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId() || game.players.indexOf(Meteor.user().username) >= 0) {
      throw new Meteor.Error("not-authorized");
    }
    if (game.players.length >= 10) {
      return alert("Il n'y a plus de place");
    }

    Games.update(gameId, {
      $push: {
        players: username
      }
    })
  },

  removePlayer: function (gameId, username) {
    // Make sure the user is logged in before inserting a task
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Games.update(gameId, {
      $pull: {
        players: username
      }
    })
  },
});