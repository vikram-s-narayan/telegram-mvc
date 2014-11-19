import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('createaccount', {path: '/'}, function(){
    this.route('login');
    this.route('resetpassword', {path: '/reset_password'});
    this.route('checkinbox', {path: '/check_inbox'});
    });

  this.resource('mystream', {path:'/:user_id'}, function(){  
  this.route('following', {path: '/:user_id/following'});
    this.route('posts', {path: '/:user_id/posts'});
    this.route('followers', {path: '/:user_id/followers'});
  });
});

export default Router;
