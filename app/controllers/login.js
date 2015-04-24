import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import Ember from 'ember';

export default Ember.Controller.extend (LoginControllerMixin, {
  authenticator: 'authenticator:parse-email',

  // function(){
  //   Ember.$('.loader-container').removeClass('hidden');
  //   Ember.run.later(this, function(){
  //     this.transitionToRoute('index');
  //   }, 2000);
  // }
  

});
