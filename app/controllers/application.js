import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

      openNav: function(){
        Ember.$('.navigation').addClass('open-nav');
        // Ember.$('.body-container').addClass('open-nav-body');
        Ember.$('header').addClass('open-nav-header');

        Ember.$('.navigation-open').addClass('hidden');
        Ember.$('.navigation-close').removeClass('hidden');


    },

      closeNav: function(){
        Ember.$('.navigation').removeClass('open-nav');
        Ember.$('header').removeClass('open-nav-header');

        Ember.$('.navigation-open').removeClass('hidden');
        Ember.$('.navigation-close').addClass('hidden');

    },

      openInfo: function(){
        Ember.$('.business-profile-info-dark').addClass('open-info');

        Ember.$('.info-close').removeClass('hidden');
        Ember.$('.info-open').addClass('hidden');


    },

      closeInfo: function(){
        Ember.$('.business-profile-info-dark').removeClass('open-info');

        Ember.$('.info-close').addClass('hidden');
        Ember.$('.info-open').removeClass('hidden');
    },

      openCalendar: function(){
        Ember.$('.sidebar-right').addClass('open-calendar');

        Ember.$('.calendar-close').removeClass('hidden');
        Ember.$('.calendar-open').addClass('hidden');


    },

      closeCalendar: function(){
        Ember.$('.sidebar-right').removeClass('open-calendar');

        Ember.$('.calendar-close').addClass('hidden');
        Ember.$('.calendar-open').removeClass('hidden');
    },
}

});
