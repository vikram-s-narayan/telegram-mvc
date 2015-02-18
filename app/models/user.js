import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  posts: DS.hasMany('post'),
  isFollowed: DS.attr('boolean'),
  imgUrl: DS.attr('string')
});
export default User;
