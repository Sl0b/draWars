Router.configure({
  layoutTemplate: 'masterLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'pageNotFound',
  yieldTemplates: {
    nav: {
      to: 'nav'
    },
  }
});

Router.map(function () {
  this.route('home');

  this.route('/:id', {
    template: 'game',
    onStop: function () {
      Meteor.call('removePlayer', this.params.id, Meteor.user().username);
    }
  })
});

Router.plugin('ensureSignedIn', {
  except: ['atSignIn', 'atSignUp']
});

//Routes
AccountsTemplates.configureRoute('signIn', {
  path: '/',
});
AccountsTemplates.configureRoute('signUp');