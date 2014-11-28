import Ember from 'ember';

var AuthLoginController = Ember.Controller.extend({
  username: '', //not mandatory. But helps readability.
  password: '', //not mandatory. But helps readability.

  actions:{
    authenticate: function() {
      var suppliedUsername = this.get('username');
      var suppliedPassword = this.get('password');
      var _this = this;

      this.store.find('user', suppliedUsername).then(function (user) {
        var userPassword = user.get('password');
        if (userPassword === suppliedPassword){
        //set the users name here
        _this.get('session').set('user', user.get('name'));

        _this.transitionToRoute('mystream');
        } else {
         alert('Password does not match. Please try again.');
       }
    }, function() {
        alert("The user was not found in the system.");
     });
   }
 }
});

export default AuthLoginController;
