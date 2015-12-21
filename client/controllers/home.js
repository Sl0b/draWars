Meteor.subscribe("games");

Template.home.helpers({
  pbgames: function () {
    return Games.find({
      private: false
    });
  },
  pvgames: function () {
    return Games.find({
      private: true
    });
  },
});

Template.home.events({
  "click .card": function (event) {
    Meteor.call('addPlayer', this._id, Meteor.user().username);

    Router.go('/' + this._id);
  },
  "submit #newGame": function (event) {
    event.preventDefault();
    var data = {};
    $("#newGame").serializeArray().map(function(x){data[x.name] = x.value;});
    Meteor.call('newGame', data);
    $('#new-game-modal').modal('hide');
    $('#new-game-modal').on('hidden.bs.modal', function () {
      Router.go('/'+Games.findOne({name: data.name})._id);
    })
  }
})

Template.home.onRendered(function () {
  $('#new-game-modal').on('shown.bs.modal', function () {
    $('#name').focus()
  })
});