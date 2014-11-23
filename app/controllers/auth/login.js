import Ember from 'ember';

var AuthLoginController = Ember.ObjectController.extend({
  actions:{
    authenticate: function(){
      var suppliedUsername = this.get('username');
      var suppliedPassword = this.get('password');
      this.store.find('user', suppliedUsername).then(function (user)
      {var userPassword = user.get('password');
      if (userPassword === suppliedPassword){
         //this.transitionTo('mystream'); does not work because this is undefined inside the promise
         alert('Password Matches');
        }else {
         alert('Password Does Not Match');
       }
    }, function(){
     alert("user not found in system");
     });
   }
 }
});

export default AuthLoginController;
