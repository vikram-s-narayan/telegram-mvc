import Ember from 'ember';

var PostListingComponent = Ember.Component.extend({


    actions: {
      deletePost: function() {
        var postToDelete = this.get('post');
        postToDelete.deleteRecord();
        postToDelete.save();
        },
    },

    isAuthor: function() {
      var currentUserId = this.get('session.user.id');
      var postAuthorId = this.get('post.postCreator.id');
      return currentUserId === postAuthorId;
    }.property('post.postCreator.id', 'session.user.id'),

});

export default PostListingComponent;
