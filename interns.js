var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {   
    if (err) throw err;
    var dbase = db.db("Martins_c");
    dbase.createCollection("myMovies", function(err, res) {
        if (err) throw err;
        console.log("myMovies Collection created");
        db.close();   
    });
});
