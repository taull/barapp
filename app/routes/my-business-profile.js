// import ajax from 'ic-ajax';
import Ember from 'ember';
// import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route';


// to check for business user, use `beforeModel` and check if currentUser is a business

export default Ember.Route.extend({
  //
  // beforeModel: function(){
  //
  //   Ember.$('body').addClass('loading');
  //
  // },

  model: function() {
    // this is ok for the arbitrary user profile
    // return this.store.find("user", params.user_id);
    return Ember.RSVP.hash({
      business: this.get('session.currentUser'),
      posts: this.store.findQuery('status', {
        business: this.get('session.currentUser')
      })
    });
    // return this.get('session.currentUser');
  },

  setupController: function(controller, model) {
    controller.set('model', model.business);
    controller.set('posts', model.posts);

  }

    // function(params){
    //   return this.store.find("user", params.user_id);
    // },


  //
  // afterModel: function() {
  //   Ember.$('body').removeClass('loading');
  // }
  //





//   actions: {
//     postStatus: function(){
//       // var self = this;
//       var data = this.getProperties('status');
//       ajax({
//         url:  "https://api.parse.com/1/classes/Post",
//         type: "POST",
//         data: JSON.stringify(data),
//         contentType: 'application/json'
//       }).then(function(response){
//         this.transitionToRoute('my-business-profile', response);
//       }.bind(this));
//   },
// }
});
