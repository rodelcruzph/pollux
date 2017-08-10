var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/test';

mongoose.Promise = global.Promise;

var promise = mongoose.createConnection(dbURI, {
  useMongoClient: true
})
.then(function(db) {
  console.log('Successfully connected to DB');
})
.catch(function(err) {
  console.log(err);
});
