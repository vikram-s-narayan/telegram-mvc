import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  //password: DS.attr('string'),
  //photoURL: DS.attr('string'),
  posts: DS.hasMany('post'),
  //followers: DS.hasMany('user'),
  //following: DS.hasMany('user'),
  //need to keep property of follow here and toggle between isTrue if logged
  //in user follows this user;
  isFollowed: DS.attr('boolean')
});
/*
User.reopenClass({
    FIXTURES: [
    {
      id: "j",
      name: "John Donnahue",
      email: "johns@gmail.com",
      password: "j",
      //photoURL: "/images/john.jpg",
      posts: [1,2],
      //followers: ["mary"],
      //following: ["mary"]
    },
    {
      id: "sarah",
      name: "Sarah Englewood",
      email: "sarah@gmail.com",
      password: "sarah",
      //photoURL: "/images/sarah.jpg",
      posts: [3,4],
      //followers: ["mary"],
      //following: ["mary","david"]
    },
    {
      id: "mary",
      name: "Mary Jane",
      email: "mary@gmail.com",
      password: "mary",
      //photoURL: "/images/mary.jpg",
      posts: [5,6],
      //followers: ["john", "sarah"],
      //following: ["john", "sarah"]
    }
    ]
});
*/
export default User;
