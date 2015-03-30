import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({

  destroy: function(name, record) {
    /* jshint unused: false */
    return ajax({
      url: "https://api.parse.com/1/classes/Post/" + record.id,
      type: "DELETE"
    });
  }
});
