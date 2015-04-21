import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

      openNav: function(){
        Ember.$('.navigation').addClass('open-nav');
        Ember.$('.navigation-open').addClass('hidden');
        Ember.$('.navigation-close').removeClass('hidden');

    },

      closeNav: function(){
        Ember.$('.navigation').removeClass('open-nav');
        Ember.$('.navigation-open').removeClass('hidden');
        Ember.$('.navigation-close').addClass('hidden');

    },

}

});
