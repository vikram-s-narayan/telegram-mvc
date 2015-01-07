import Ember from 'ember';

var AuthLoginController = Ember.Controller.extend({
  username: '', //To understand why - http://emberjs.com/api/classes/Ember.ObjectProxy.html
  password: '',

  actions:{
    authenticate: function() {
      var suppliedUsername = this.get('username');
      var suppliedPassword = this.get('password');
      var _this = this;
      this.store.find('user', {
                                username: suppliedUsername,
                                password: suppliedPassword,
                                operation: 'login'
                              }).then(function(users) {
                                  //if (typeof (users.get('firstObject'))!=="undefined") {
                                  var user = users.get('firstObject');
                                  _this.get('session').set('user', user);
                                  _this.transitionToRoute('mystream');
                                //} else {
                                  //alert("User isn't in system or password doesn't match");
                                //}
                              },
                               function(response) {
                                 console.log(response.status); //403 comes from server
                                 console.log(response.responseText); //Error message as string
                                 alert(response.status);
                                 alert(response.responseText);
                               }
                              );
                      }

                    }
              });

export default AuthLoginController;

/*
bring user from backend
check on client
bad security
send username and password to server
let server do check
if check passed on server, send user
in route, we're going to redirect to mystream
to be able to send this
we're going to use a custom query in ember
custom query replaces second argument (say, "id")
with a json object with more data
This goes to server
Then goes to /api/users
here all the info will be in req.query (username, password and operation)
if request.query.operation === login, then I'm going to search for user
with username and password
if matches, res({users: [user]})
if req.operation is not login, send back all users
on client, then(function(user) => then(function(users) {
if length of users array is 1, then user is authenticated... else not authenticated;
if authenticated, do redirect to mystream and set session.
to extract user, use "users.get('firstObject')"
}
*/
      //{username: suppliedUsername,
      //password: suppliedPassword,
      //operation: 'login'}).then(function (user) {
      //rename as users and in object, extract the single user object -
      //Ember Ember.Array.get(firstObject); don't check password

/*
//this was the code that used to work with fixture data
var userPassword = user.get('password');
if (userPassword === suppliedPassword){
//set the user object here
_this.get('session').set('user', user);
_this.transitionToRoute('mystream');
} else {
alert('Password does not match. Please try again.');
}
}, function() {
alert("The user was not found in the system.");
});
}
}
});
*/
