import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy: function(){
      this.get('model').destroy();
    },

    addFavorite: function(){
      var status = this.get('model');
      this.get('session.currentUser').addFavorite(status);
    }
  }
});
