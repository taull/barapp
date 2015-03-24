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
          this.transitionToRoute('/', response);
        }, 2000);
        this.session.authenticate('authenticator:parse-email', {
          sessionToken: response.sessionToken,
        });

      }.bind(this));
  },
}

});
