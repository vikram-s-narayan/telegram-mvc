import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('auth', {path: '/'}, function(){
    this.route ('signup', {path: '/'});
    this.route('login');
    this.route('reset');
    this.route('checkinbox');
    });

  this.route('mystream');

  this.resource('user', {path: '/:user_id'}, function(){
    this.route('posts', {path: '/'});
    this.route('following');
    this.route('followers');
  });
  this.route('auth/checkinbox');
});

export default Router;
