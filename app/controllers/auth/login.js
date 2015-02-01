import Ember from 'ember';

var AuthLoginController = Ember.Controller.extend({
  username: '', //To understand why - http://emberjs.com/api/classes/Ember.ObjectProxy.html
  password: '',

  actions:{
    authenticate: function() {
      var suppliedUsername = this.get('username');
      var suppliedPassword = md5(this.get('password'));
      var _this = this;
      var user = this.store.createRecord('user', {
        id: suppliedUsername,
        password: suppliedPassword,
        operation: 'login'
      });

      user.save().then(function(user) {
        // Your user was saved. You can now redirect to the dashboard.
        _this.get('session').set('user', user);
        _this.transitionToRoute('/mystream');
      }, function(response) {
        // Handle error
        console.log(response);
      });

    }

  }
});


export default AuthLoginController;
