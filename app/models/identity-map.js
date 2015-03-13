import Ember from 'ember';

export default Ember.Object.extend({
  init: function(){
    this._map = Ember.Object.create();
  },

  get: function(type, id) {
    var typeArray = this._getType(type);
    if(id) {
    /* SINGLE RECORD */
      return typeArray.findBy('__jsim_meta_id', id);
    } else {
    /* ALL RECORDS */
      return typeArray;
    }
  },

  set: function(type, id, record) {
    var typeArray = this._getType(type);
    var cached = typeArray.findBy('__jsim_meta_id', id);
    if(cached) {
      cached.setProperties(record);
    } else {
      var v = record instanceof(Ember.Object) ? record : Ember.Object.create(record);
      v.__jsim_meta_id = id;
      typeArray.addObject(v);
    }
  },

  _getType: function(type) {
    var typeArray = this._map.get(type);
    if(!typeArray){
      this._map.set(type, Ember.A());
      typeArray = this._map.get(type);
    }
    return typeArray;
  }
});
