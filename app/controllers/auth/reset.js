import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  actions: {
    passwordReset: function(){
      var email = this.get('email');
      var _this = this;
      //because we're asking to find 'user', it goes to users route on server
      this.store.find('user', {operation: 'passwordReset', email: email}).then(function(users){
        console.log('about to call on transition');
        _this.transitionToRoute('auth.checkinbox');
      }, function(err){
        console.log(err);
      });
    }
  }
});
