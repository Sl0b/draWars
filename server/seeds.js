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