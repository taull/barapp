import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('status', {
      createdBy: this.get('session.currentUser')
    });
  },

  actions: {
    createStatus: function(){
      this.modelFor('new').save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
