import Ember from 'ember';


var MystreamController = Ember.ArrayController.extend({

  postContent: '',
  charactersRemaining: function(){
    return 140 - (this.get('postContent') ||
    '').length;
    }.property('postContent'),

  sortProperties: ['createdAt'],
  sortAscending: false,
  actions: {
    saveComment: function() {
      var store = this.store;
      var post = store.createRecord('post',{
        postCreator: this.get('session.user.name'),//should be session.user
        postContent: this.get('postContent')
      });
      post.save();
    }
  }

});

export default MystreamController;
