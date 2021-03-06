import Ember from 'ember';

var AuthSignupController = Ember.Controller.extend({

  username: '',
	password: '',

  actions: {
    saveUser: function() {
      var store = this.store;
      var name = this.get('name');
      var username = this.get('username');
      var password = md5(this.get('password'));
      var email = this.get('email');
      var user = store.createRecord('user',{
        id: username,
        name: name,
        username: username,
        password: password,
        email: email,
        operation: 'signup'
      });

      var _this = this;
      user.save().then(function() {
          _this.get('session').set('user', user);
          _this.transitionToRoute('/mystream');
          },function(reason) {
            _this.store.unloadAll('user');
            console.log(reason);
          });
      }
    }
  });

export default AuthSignupController;
