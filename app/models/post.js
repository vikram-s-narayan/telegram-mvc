import DS from 'ember-data';

var Post = DS.Model.extend({
  postId: DS.attr('string'),
  postCreator: DS.belongsTo('user'),
  postContent: DS.attr('string'),

  createdAt: DS.attr('string', {
          defaultValue: function() { return new Date(); }
      }),

  deletePost: function(){},
  repostPost: function(){},
});

Post.reopenClass({
    FIXTURES: [
    {
      postId: '001',
      postCreator: "bambooflute",
      postContent: "Round the rugged rock ...",
      createdAt: new Date("October 13, 2014 11:13:00")
    },
    {
      postId: '002',
      postCreator: "bambooflute",
      postContent: "Ran the ragged rascal!",
      createdAt: new Date("October 14, 2014 12:30:00")
    }

  ]
});

export default Post;
