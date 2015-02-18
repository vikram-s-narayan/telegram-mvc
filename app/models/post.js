import DS from 'ember-data';

var Post = DS.Model.extend({
  postCreator: DS.belongsTo('user', {async: true}),
  postContent: DS.attr('string'),
  createdAt: DS.attr('date', {
          defaultValue: function() { return new Date(); }
      }),
});

export default Post;
