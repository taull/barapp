import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
      saveProfile: function(){
        this.get('session.currentUser').save();
        Ember.$('.loader-container').removeClass('hidden');
        Ember.run.later(this, function(){
          this.transitionToRoute('my-business-profile');
        }, 2000);
      }
    }

});
