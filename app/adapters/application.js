import DS from 'ember-data';

//var ApplicationAdapter = DS.FixtureAdapter.extend();
var ApplicationAdapter = DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://192.168.56.10:3000'
});

export default ApplicationAdapter;
