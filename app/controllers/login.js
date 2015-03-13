import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend (LoginControllerMixin, {
  authenticator: 'authenticator:parse-email'
});
