import Ember from "ember";

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup({
    headers: {
      "X-Parse-Application-Id": "AfNszK8Rd7zcsyJhCHpyoRCPM338C6aiylN6mgC6",
      "X-Parse-REST-API-Key": "COVAwkICU4GoLPTQt2AN9rBI0Y7jUVk7ZbBzudFy"
    }
  });}

export default {
  name: 'parse-keys',
  initialize: initialize
};
