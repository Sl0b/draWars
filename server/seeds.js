if (Meteor.users.find().count() === 0) {
  var id = Accounts.createUser({
    username: "Sl0b",
    password: "Test1",
  });

  console.log("Added Sl0b user...");

  var id = Accounts.createUser({
    username: "test",
    password: "Test1",
  });

  console.log("Added test user...");
}

var gamesSeed = [
  {
    name: 'Public 1',
    players: [],
    private: false,
  },
  {
    name: 'Public 2',
    players: [],
    private: false,
  },
  {
    name: 'Public 3',
    players: [],
    private: false,
  },
  {
    name: 'Private 1',
    password: 1234,
    players: ['Sl0b'],
    private: true,
  },
];

if (Games.find().count() === 0) {
  _.each(gamesSeed, function (game) {
    Games.insert(game);
    console.log("insert " + game.name + " game");
  })
}