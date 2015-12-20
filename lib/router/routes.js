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

  this.route('public1');
  this.route('public2');
});

Router.plugin('ensureSignedIn', {
  except: ['atSignIn', 'atSignUp']
});

//Routes
AccountsTemplates.configureRoute('signIn', {
  path: '/',
});
AccountsTemplates.configureRoute('signUp');