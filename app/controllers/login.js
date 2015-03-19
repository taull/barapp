import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import Ember from 'ember';

export default Ember.Controller.extend (LoginControllerMixin, {
  authenticator: 'authenticator:parse-email'
});
