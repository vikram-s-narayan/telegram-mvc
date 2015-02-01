import Ember from 'ember';

export default Ember.Controller.extend({
  email: '',
  actions: {
    passwordReset: function(){
      var email = this.get('email');
      var _this = this;
      var user = this.store.createRecord('user', {
        email: email,
        operation: 'passwordReset'
      });

      user.save().then(function(user) {
        _this.transitionToRoute('auth.checkinbox');
    }, function(err){
      console.log(err);
    });
}
}
});
