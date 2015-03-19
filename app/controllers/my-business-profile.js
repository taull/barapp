import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postStatus: function(){
      // var self = this;
      var data = this.getProperties('status');
      data.creator = {
        __type: "Pointer",
        className: "_User",
        objectId: this.get('session.currentUser.id')
      };
      data.business = {
        __type: "Pointer",
        className: "_User",
        objectId: this.get('model.id')
      };
      ajax({
        url:  "https://api.parse.com/1/classes/Post",
        type: "POST",
        data: JSON.stringify(data),
        contentType: 'application/json'
      }).then(function(response){
        this.transitionToRoute('my-business-profile', response);
      }.bind(this));
  },
}
});
