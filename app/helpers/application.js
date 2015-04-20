import Ember from 'ember';

export function application(input) {
  return input;
}

export default Ember.Handlebars.makeBoundHelper(application);
