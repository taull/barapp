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


export default Ember.ArrayController.extend ({
  sortProperties: ['createdAt'],
  sortAscending: false,

  filterBy: 'business.zip',

  filteredPosts: function(){
    var filterText = this.get('filterText');
    var filterBy = this.get('filterBy');
    if(filterText) {
      return this.get('arrangedContent').filterBy(filterBy, filterText);
    } else {
      return this.get('arrangedContent');
    }
  }.property('arrangedContent.@each', 'filterText')
});
