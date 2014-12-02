import DS from 'ember-data';

var Post = DS.Model.extend({
  postCreator: DS.belongsTo('user', {async: true}),
  //postCreator: DS.attr('string'),
  postContent: DS.attr('string'),

  createdAt: DS.attr('date', {
          defaultValue: function() { return new Date(); }
      }),


});

Post.reopenClass({
    FIXTURES: [
    {
      id: 1,
      postCreator: "john",
      postContent: "Round the rugged rock ...",
      createdAt: new Date("October 13, 2014 11:13:00")
    },
    {
      id: 2,
      postCreator: "john",
      postContent: "Ran the ragged rascal!",
      createdAt: new Date("October 14, 2014 12:30:00")
    },
    {
      id: 3,
      postCreator: "sarah",
      postContent: "Beautiful bright day today!",
      createdAt: new Date("October 14, 2014 12:40:00")
    },
    {
      id: 4,
      postCreator: "sarah",
      postContent: "The sun shines bright here in Oz",
      createdAt: new Date("October 12, 2014 12:30:00")
    },
    {
      id: 5,
      postCreator: "mary",
      postContent: "We're having a snow storm here",
      createdAt: new Date("October 14, 2014 2:30:00")
    },
    {
      id: 6,
      postCreator: "mary",
      postContent: "The lake opposite is frozen!",
      createdAt: new Date("October 15, 2014 12:30:00")
    }

  ]
});

export default Post;
