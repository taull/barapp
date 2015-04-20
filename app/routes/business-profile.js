// import ajax from 'ic-ajax';
import Ember from 'ember';
// import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route';


// to check for business user, use `beforeModel` and check if currentUser is a business

export default Ember.Route.extend({

  model: function(params) {
    // this is ok for the arbitrary user profile
    // return this.store.find("user", params.user_id);
    return this.store.find("user", params.user_id);
  },

  // setupController: function(controller, model) {
  //   controller.set('model', model.business);
  //   controller.set('posts', model.posts);
  //
  // }

    // function(params){
    //   return this.store.find("user", params.user_id);
    // },


});
