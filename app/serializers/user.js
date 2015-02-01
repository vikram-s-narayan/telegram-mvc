import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  serialize: function(record, options) {
    var data = this._super(record, options);

    data.meta = {
      operation: record.get('operation'),
      password: record.get('password')
    };

    return data;
  }
});
