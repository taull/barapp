import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveStatus: function(){
      this.get('model').save();
      this.transitionToRoute('show', this.get('model'));
    }
  }
});
