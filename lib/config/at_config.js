// Options
AccountsTemplates.configure({
  homeRoutePath: '/home',
  //  defaultLayout: 'fullPageAtForm',
  showForgotPasswordLink: false,
  overrideLoginErrors: true,
  enablePasswordChange: false,

  //sendVerificationEmail: true,
  //enforceEmailVerification: true,
  //confirmPassword: true,
  //continuousValidation: false,
  //displayFormLabels: true,
  //forbidClientAccountCreation: true,
  //formValidationFeedback: true,
  //homeRoutePath: '/',
  //showAddRemoveServices: false,
  //showPlaceholders: true,

  negativeValidation: true,
  positiveValidation: true,
  negativeFeedback: false,
  positiveFeedback: true,

  //Privacy Policy and Terms of Use
  //privacyUrl: 'privacy',
  //termsUrl: 'terms-of-use',
});

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "username",
    required: true,
    minLength: 4
  },
  {
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 4,
    re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/,
    errStr: 'At least 1 digit, 1 lower-case and 1 upper-case'
  }
]);