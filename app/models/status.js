import Model from 'ember-magic-man/model';

export default Model.extend({

  toJSON: function(){
    var data = this._super();

    data.creator = {
      __type: "Pointer",
      className: "_User",
      objectId: this.get('creator.id')
    };
    data.business = {
      __type: "Pointer",
      className: "_User",
      objectId: this.get('business.id')
    };

    return data;
  }
});
