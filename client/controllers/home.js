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
  }
})