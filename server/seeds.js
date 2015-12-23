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
    ongoing: false,
    private: false,
  },
  {
    name: 'Public 2',
    players: [],
    ongoing: false,
    private: false,
  },
  {
    name: 'Public 3',
    players: [],
    ongoing: false,
    private: false,
  },
  {
    name: 'Private 1',
    password: 1234,
    ongoing: false,
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