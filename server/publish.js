Meteor.publish("games", function () {
  return Games.find();
});

Meteor.publish("userStatus", function() {
  return Meteor.users.find({ "status.online": true }, { fields: { "status.idle": 1, username: 1 } });
});