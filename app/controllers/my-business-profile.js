import Ember from 'ember';

export default Ember.Controller.extend({

  sortPosts: ['createdAt:desc'],
  sortedPosts: Ember.computed.sort('posts', 'sortPosts'),

  actions: {

    destroy: function(){
      this.get('model').destroy();
    },

    postStatus: function(){
      var status = this.store.createRecord('status', {
        status: this.get('status'),
        creator: this.get('session.currentUser'),
        business: this.get('model')
      });

      status.save().then(function(){
        this.set('status', '');
        Ember.$('.post-loader-container').removeClass('hidden');
        Ember.run.later(this, function(){
          this.get('posts').addObject(status);
          Ember.$('.post-loader-container').addClass('hidden');
        }, 1000);
      }.bind(this));
  },


      editDestroy: function(){
        Ember.$('.feed-avatar').removeClass('hidden');
        Ember.$('.edit-feed').addClass('hidden');
        Ember.$('.edit-destroy').addClass('hidden');

        Ember.$('.cancel-edit').removeClass('hidden');
        Ember.$('.cancel-destroy').removeClass('hidden');
        Ember.$('.feed-info-container').addClass('feed-info-editing');

    },

      cancelDestroy: function(){
        Ember.$('.feed-avatar').addClass('hidden');
        Ember.$('.edit-feed').removeClass('hidden');
        Ember.$('.edit-destroy').removeClass('hidden');

        Ember.$('.cancel-edit').addClass('hidden');
        Ember.$('.cancel-destroy').addClass('hidden');
        Ember.$('.feed-info-container').removeClass('feed-info-editing');

    },

      openNav: function(){
        Ember.$('.navigation').addClass('open-nav');
        Ember.$('header').addClass('open-nav-header');

        Ember.$('.navigation-open').addClass('hidden');
        Ember.$('.navigation-close').removeClass('hidden');

        Ember.$('.navigation-container').addClass('navigation-container-open');



    },

      closeNav: function(){
        Ember.$('.navigation').removeClass('open-nav');
        Ember.$('header').removeClass('open-nav-header');

        Ember.$('.navigation-open').removeClass('hidden');
        Ember.$('.navigation-close').addClass('hidden');

        Ember.$('.navigation-container').removeClass('navigation-container-open');


    },

}


});


    // Ember.$('#accordion').find('.accordion-toggle').click(function(){

    //   //Expand or collapse this panel
    //   $(this).next().slideToggle('fast');

    //   //Hide the other panels
    //   Ember.$(".accordion-content").not($(this).next()).slideUp('fast');

    // });
