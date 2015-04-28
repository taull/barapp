import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Controller.extend({
  typeUser: ["Consumer", "Business"],

  actions: {
    register: function(){
      // var self = this;
      var data = this.getProperties('userType', 'firstName', 'lastName', 'username', 'password');
      data.email = data.username;
      ajax({
        url:  "https://api.parse.com/1/users",
        type: "POST",
        data: JSON.stringify(data),
        contentType: 'application/json'
      }).then(function(response){

        Ember.$('.loader-container').removeClass('hidden');
        Ember.run.later(this, function(){
          this.session.authenticate('authenticator:parse-email', {
          sessionToken: response.sessionToken,
        });
          this.transitionToRoute('/', response);
        }, 2000);


      }.bind(this));
  },

    // confirmPassword: function(){
    //   var password = Ember.$("#password");
    //   var confirm_password = Ember.$("#confirm_password");

    //   function validatePassword(){
    //     if(password.value !== confirm_password.value) {
    //       confirm_password.setCustomValidity("Passwords Don't Match");
    //     } else {
    //       confirm_password.setCustomValidity('');
    //     }
    //   }

    //   password.onchange = validatePassword;
    //   confirm_password.onkeyup = validatePassword;
    // },





  }
});


