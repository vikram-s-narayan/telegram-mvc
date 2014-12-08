import Ember from 'ember';

var AuthLoginController = Ember.Controller.extend({
  username: '', //To understand why - http://emberjs.com/api/classes/Ember.ObjectProxy.html
  password: '',

  actions:{
    authenticate: function() {
      var suppliedUsername = this.get('username');
      var suppliedPassword = this.get('password');
      var _this = this;

      this.store.find('user', suppliedUsername).then(function (user) {
        var userPassword = user.get('password');
        if (userPassword === suppliedPassword){
        //set the user object here
        _this.get('session').set('user', user);
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
