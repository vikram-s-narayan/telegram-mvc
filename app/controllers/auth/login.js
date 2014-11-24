import Ember from 'ember';

var AuthLoginController = Ember.ObjectController.extend({
  actions:{
    authenticate: function(){
      var suppliedUsername = this.get('username');
      var suppliedPassword = this.get('password');
      var instanceOfThis = this;
      this.store.find('user', suppliedUsername).then(function (user)
      {var userPassword = user.get('password');
      if (userPassword === suppliedPassword){
         instanceOfThis.transitionTo('mystream');
        }else {
         alert('Password does not match. Please try again.');
       }
    }, function(){
        alert("The user was not found in the system.");
     });
   }
 }
});

export default AuthLoginController;
