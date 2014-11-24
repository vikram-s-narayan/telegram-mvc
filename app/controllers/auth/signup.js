import Ember from 'ember';

var AuthSignupController = Ember.ObjectController.extend({
  actions: {
    saveUser: function(){
      var store = this.store;
      var name = this.get('name');
      var username = this.get('username');
      var password = this.get('password');
      var user = store.createRecord('user',{
        id: username,
        name: name,
        username: username,
        password: password
      });
      user.save();
      this.transitionTo('/login');
    }
  }
});


export default AuthSignupController;
