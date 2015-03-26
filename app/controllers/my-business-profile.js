import Ember from 'ember';

export default Ember.Controller.extend({

  sortPosts: ['createdAt:desc'],
  sortedPosts: Ember.computed.sort('posts', 'sortPosts'),

  actions: {
    postStatus: function(){
      var status = this.store.createRecord('status', {
        status: this.get('status'),
        creator: this.get('session.currentUser'),
        business: this.get('model')
      });

      status.save().then(function(){
        Ember.$('.post-loader-container').removeClass('hidden');
        Ember.run.later(this, function(){
          this.get('posts').addObject(status);
          Ember.$('.post-loader-container').addClass('hidden');
        }, 1000);
      }.bind(this));
  },
}
});
