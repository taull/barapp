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
        Ember.$('.body-container').addClass('open-calendar-body');

        Ember.$('.calendar-close').removeClass('hidden');
        Ember.$('.calendar-open').addClass('hidden');


    },

      closeCalendar: function(){
        Ember.$('.sidebar-right').removeClass('open-calendar');
        Ember.$('.body-container').removeClass('open-calendar-body');

        Ember.$('.calendar-close').addClass('hidden');
        Ember.$('.calendar-open').removeClass('hidden');
    },

      openBeer: function(){
        Ember.$('.sidebar-left').addClass('open-beer');

        Ember.$('.body-container').addClass('open-beer-body');
        Ember.$('.sidebar-nav').addClass('open-beer-sidebar-nav');

        Ember.$('.beer-close').removeClass('hidden');
        Ember.$('.beer-open').addClass('hidden');


    },

      closeBeer: function(){
        Ember.$('.sidebar-left').removeClass('open-beer');
        Ember.$('.body-container').removeClass('open-beer-body');
        Ember.$('.sidebar-nav').removeClass('open-beer-sidebar-nav');

        Ember.$('.beer-close').addClass('hidden');
        Ember.$('.beer-open').removeClass('hidden');
    },
}

});
