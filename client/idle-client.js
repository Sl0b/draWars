Meteor.subscribe("userStatus");

Tracker.autorun(function (c) {
  if (Meteor.userId()) {
    try {
      UserStatus.startMonitor({
        threshold: 50000,
        interval: 10000,
        idleOnBlur: false
      })
    } catch (err) {
      console.log(err);
    }
  } else {
    UserStatus.stopMonitor();
  }
})

Meteor.users.find({ "status.idle": true }).observe({
  added: function(user) {
    if (user._id == Meteor.userId())
      Router.go('/home');
  },
  removed: function(user) {
    // user just went idle
  }
});