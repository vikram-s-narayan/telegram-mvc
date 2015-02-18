import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    follow: function () {
     console.log('follow component for ', this.get('user'));
      this.sendAction('follow', this.get('user'));
    },

    unfollow: function () {
      console.log('unfollow component for ', this.get('user'));
      this.sendAction('unfollow', this.get('user'));
    }
  }
});
