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
  }
  actions: {
    follow: function() {
      this.sendAction('follow');
    }
  }
  actions: {
    follow: function () {
      console.log('follow component');
      this.sendAction('follow', this.get('user'));
    }
  }

*/
actions: {
  follow: function () {
   console.log('follow component for ', this.get('user'));
    this.sendAction('follow', this.get('user'));

  }
}
});
