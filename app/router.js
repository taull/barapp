import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('business-edit');
  this.route('business-profile');
  this.route('user-profile');
  this.route('user-signup');
  this.route('business-signup');
  this.route('my-business-profile');
  this.route('signin');
  this.route('signup-type');
  this.route('login');
  this.route('new');
  this.route('register');
  this.route('cover-upload');
  this.route('loading');
  this.route('slide-show', function() {
    this.route('slide-show');
  });
});

export default Router;
