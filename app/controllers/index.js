import Ember from 'ember';

export default Ember.Controller.extend({
  statusCount: function(){
    return this.get('model.length');
  }.property('model.@each')
});
