import Ember from 'ember';

export default Ember.Controller.extend({

  sortPosts: ['createdAt:desc'],
  sortedPosts: Ember.computed.sort('posts', 'sortPosts'),

});
