import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  photoURL: DS.attr('string'),
  posts: DS.hasMany('post'),
  followers: DS.hasMany('user'),
  following: DS.hasMany('user'),

});

User.reopenClass({
    FIXTURES: [
    {
      id: "john",
      name: "John",
      email: "johns@gmail.com",
      password: "johnpassword",
      photoURL: "/images/john.jpg",
      posts: [1,2],
      followers: ["mary"],
      following: ["mary"]
    },
    {
      id: "sarah",
      name: "Sarah",
      email: "sarah@gmail.com",
      password: "sarahpassword",
      photoURL: "/images/sarah.jpg",
      posts: [3,4],
      followers: ["mary"],
      following: ["mary","david"]
    },
    {
      id: "mary",
      name: "Mary",
      email: "mary@gmail.com",
      password: "marypassword",
      photoURL: "/images/mary.jpg",
      posts: [5,6],
      followers: ["john", "sarah"],
      following: ["john", "sarah"]
    }
    ]
});

export default User;
