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

  findByBusiness: function(name, query) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/Post?include=creator,business", {
      data: {
        where: JSON.stringify({
          "business":{
            "__type":"Pointer",
            "className":"_User",
            "objectId": query.business.id
          }
        })
      }
    }).then(function(response){
      return response.results.map(function(post) {
        post.id = post.objectId;
        delete post.objectId;
        return post;
      });
    });
  },

  save: function(name, record) {
    /* jshint unused: false */
    if(record.id) {
      return ajax({
        url: "https://api.parse.com/1/classes/Post/" + record.id,
        type: "PUT",
        data: JSON.stringify(record.toJSON())
      }).then(function(response) {
        record.updatedAt = response.updatedAt;
        return record;
      });
    } else {
      return ajax({
        url: "https://api.parse.com/1/classes/Post",
        type: "POST",
        data: JSON.stringify(record.toJSON())
      }).then(function(response) {
        record.id = response.objectId;
        record.createdAt = response.createdAt;
        return record;
      });
    }
  }
});
