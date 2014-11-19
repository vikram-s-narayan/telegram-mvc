import DS from 'ember-data';

var User = DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName'),

  email: DS.attr('string'),
  password: DS.attr('string'),
  photoURL: DS.attr('string'), //where are photos stored? how to construct URL?
  posts: DS.hasMany('post'),

  publish: function(){},
  follow: function(){},
  unfollow: function(){},
  repost: function(){}

});

User.reopenClass({
    FIXTURES: [
    {
      username: "bambooflute",
      firstName: "John",
      lastName: "Sengenberger",
      email: "johns@gmail.com",
      password: "hashedandsalted",
      photoURL: "public/assets/images/john.jpg",
      posts: [
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

    },
    {

    }
    ]
});

export default User;
