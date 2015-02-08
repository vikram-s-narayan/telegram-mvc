import Ember from 'ember';

export default Ember.Component.extend({
  /*actions: {
    follow: function(){
      alert(this.user.id); //why are we not able to do user.name?
      //sendAction helper to routes above
    }
  }
  click: function() {
    alert('hi');
    this.sendAction('follow');
  }*/
  actions: {
    follow: function() {
      this.sendAction('follow');
    }
  }
});
