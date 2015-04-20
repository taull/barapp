import Ember from 'ember';

// export default Ember.ArrayController.extend({
  // sortProperties: ['createdBy'],
  // sortAscending: false
  // sortBy: function(property) {
  //   this.set('sortProperties', [property]);
  //   this.set('sortAscending', !this.get('sortAscending'));
  // },

  // statusCount: function(){
  //   return this.get('model.length');
  // }.property('model.@each')
// });


export default Ember.Controller.extend ({
  sortAscending: false,

  sortedPosts: function(){
    var sorted = this.get('model').sortBy('createdAt');
    if( ! this.get('sortAscending')) {
      return sorted.reverse();
    } else {
      return sorted;
    }
  }.property('model.@each', 'sortAscending'),

  filteredCityPosts: function(){
    var filterText = this.get('filterText');
    var sorted = this.get('sortedPosts');
    if(filterText) {
      return sorted.filterBy('business.city', filterText);
    } else {
      return sorted;
    }
  }.property('sortedPosts.@each', 'filterText'),

  filteredZipPosts: function(){
    var filterText = this.get('filterText');
    var sorted = this.get('sortedPosts');
    if(filterText) {
      return sorted.filterBy('business.zip', filterText);
    } else {
      return sorted;
    }
  }.property('sortedPosts.@each', 'filterText'),

  filteredPosts: Ember.computed.union('filteredCityPosts', 'filteredZipPosts'),

  actions: {
      viewProfile: function() {
        var model = this.get('model');
        console.log(model);
        this.transitionToRoute('business-profile', model);
      },
    }


});
