import ajax from 'ic-ajax';
import Ember from 'ember';

// TODO: reverse id -> objectId for POST/PUT/DELETE

export default Ember.Object.extend({
  // find: function(name, id){
  //   /* jshint unused: false */
  //   return ajax("https://api.parse.com/1/classes/Status/" + id).then(function(status){
  //     status.id = status.objectId;
  //     delete status.objectId;
  //     return status;
  //   });
  // },
  //
  findAll: function(name) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Post?include=creator,business").then(function(response){
      return response.results.map(function(post) {
        post.id = post.objectId;
        delete post.objectId;
        return post;
      });
    });
  },
  // in routes/my-business-profile.js
  // model: function(){
  //   var businessId = this.get('session.currentUser.id');
  //   return this.store.findQuery('status', {business: businessId});
  // }

  findQuery: function(name, query) {
    if(query.business) {
      return this.findByBusiness(name, query);
    }
  },

  // https://parse.com/docs/rest#queries-relational
  // findByBusiness: function(name, businessId) {
  //   /* jshint unused: false */
  //   return ajax("https://api.parse.com/1/classes/Status", {
  //     data: Ember.$.param({
  //             where: JSON.stringify(query)
  //           })
  //   }).then(function(response){
  //     return response.results.map(function(status) {
  //       status.id = status.objectId;
  //       delete status.objectId;
  //       return status;
  //     });
  //   });
  // },
  //
  // destroy: function(name, record) {
  //   /* jshint unused: false */
  //   return ajax({
  //     url: "https://api.parse.com/1/classes/Status/" + record.id,
  //     type: "DELETE"
  //   });
  // },
  //
  // save: function(name, record) {
  //   /* jshint unused: false */
  //   if(record.id) {
  //     return ajax({
  //       url: "https://api.parse.com/1/classes/Status/" + record.id,
  //       type: "PUT",
  //       data: JSON.stringify(record)
  //     }).then(function(response) {
  //       response.id = response.objectId;
  //       delete response.objectId;
  //       return response;
  //     });
  //   } else {
  //     return ajax({
  //       url: "https://api.parse.com/1/classes/Status",
  //       type: "POST",
  //       data: JSON.stringify(record)
  //     }).then(function(response) {
  //       record.updatedAt = response.updatedAt;
  //       return record;
  //     });
  //   }
  // }
});
