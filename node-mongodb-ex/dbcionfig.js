var util = require('util');
var mongodb = require('mongodb');
var client = mongodb.MongoClient;

/** Connect to the Mongo database at the URI using the client */
client.connect("mongodb://localhost:27017/ex1",  function (err, database) {
    if (err) throw err;
    else if (!database) console.log('Unknown error connecting to database');
    else {

        console.log('Connected to MongoDB database server at:');
        //console.log('\n\t%s\n', uri);
        // Create or access collections, etc here using the database object
    }
});